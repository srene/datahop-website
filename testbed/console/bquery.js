    // Client ID for OAuth 2.0 authorization against BigQuery.
    var clientId = '630599155290-h3mi4vl387lekfdig2g5ddjb078b12oj.apps.googleusercontent.com';
    // BigQuery settings. Replace these with your project, dataset and table names.
    var billingProjectId = 'test-1c370';
    var publicProjectId = 'test-1c370';
    var datasetId = 'analytics_156405695';
    //var tableName = 'tlc_yellow_trips_2016';
    var scopes = 'https://www.googleapis.com/auth/bigquery';
    // Limit the number of records that a query will return.
    var recordLimit = 10000;
    var jobCheckTimer;
    var map;
    var drawingManager;
    var heatmap;
    // Check if the user is authorized.
    //var data;// = [{ x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23],type: 'bar'}];

    var discoveries;// = [{ x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23],type: 'bar'}];
    var connections;// = [{ x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23],type: 'bar'}];
    var failedConnections;
    var connectionTime;// = [{ x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23],type: 'bar'}];
    var transfers;// = [{ x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23],type: 'bar'}];
    var startedConnections;

    // Check if the user is authorized.
    function authorize(event) {
        console.log("AUTH");
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
    }

    // If authorized, load BigQuery API.
    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
            console.log("authorized");
            loadApi();
        } else {
            console.error('Not authorized.')
        }
    }

    // Load BigQuery client API and then initialize the map.
    function loadApi(){
        console.log("load api");
        gapi.client.load('bigquery', 'v2').then(
            function() {
                connectionTimeQuery();
                discoveriesQuery();
                connectionsQuery();
                connectionsFailedQuery();
		connectionsStartedQuery();
	        transferTimeQuery();
            }
        );
    }

    // Send a query to BigQuery using the Google Client API for JavaScript.
    function sendQuery(queryString,queryId){
        var request = gapi.client.bigquery.jobs.query({
                                                      'query': queryString,
                                                      'timeoutMs': 30000,
                                                      'datasetId': datasetId,
                                                      'projectId': billingProjectId,
                                                      'useLegacySql':false
                                                      });
        request.execute(function(response) {
                        checkJobStatus(response.jobReference.jobId,queryId);
                        });
    }

    // Poll a job to see if it has finished executing.
    function checkJobStatus(jobId,queryId){
        var request = gapi.client.bigquery.jobs.get({
                                                    'projectId': billingProjectId,
                                                    'jobId': jobId
                                                    });
        request.execute(function(response){
                        //Show progress to the user
                        //updateStatus(response);
                        if (response.status.errorResult){
                        // Handle any errors.
                        console.log(response.status.error);
                        } else {
                        if (response.status.state == 'DONE'){
                        // Get the results.
                        clearTimeout(jobCheckTimer);
                        getQueryResults(jobId,queryId);
                        } else {
                        // Not finished, check again in a moment.
                        jobCheckTimer = setTimeout(checkJobStatus, 500, [jobId]);
                        }
                        }
                        });
    }


    function discoveriesQuery(){
      var queryString = discoveriesSQL();
      sendQuery(queryString,"discoveries");
    }

    function connectionTimeQuery(){
        console.log("query");
        var queryString = connectionTimeSQL();
        sendQuery(queryString,"connectionTime");
    }

    function connectionsQuery(){
        var queryString = connectionsSQL();
        sendQuery(queryString,"connections");
    }

    function connectionsFailedQuery(){
        var queryString = connectionsFailedSQL();
        sendQuery(queryString,"failedConnections");
    }

    function connectionsStartedQuery(){
        var queryString = connectionsStartedSQL();
        sendQuery(queryString,"startedConnections");
    }

    function transferTimeQuery(){
        var queryString = transferTimeSQL();
        sendQuery(queryString,"transferTime");
    }

    function connectionTimeSQL(){
        var queryString = 'SELECT AVG(DATETIME_DIFF(CAST(t1.event.value.string_value as DATETIME),CAST(t2.event.value.string_value as DATETIME),MILLISECOND)) as connect_time, '
        queryString +=  'date(CAST(t1.event.value.string_value as DATETIME)) as DATETIME '
        queryString +=  'FROM (SELECT event, event_timestamp '
        queryString +=  'FROM `analytics_156405695.events_*` '
        queryString +=  ',UNNEST(event_params)  as event '
        queryString +=  'WHERE event_name = "conn_completed") as t1 '
        queryString +=  'JOIN (SELECT event, event_timestamp '
        queryString +=  'FROM `analytics_156405695.events_*` '
        queryString +=  ',UNNEST(event_params)  as event '
        queryString +=  'WHERE event_name = "conn_completed") as t2 '
        queryString +=  'ON t1.event_timestamp = t2.event_timestamp '
        queryString +=  'WHERE t1.event.key = "time_finished" '
        queryString +=  'AND t2.event.key = "time_started" '
        queryString +=  'GROUP BY DATETIME '
        queryString +=  'ORDER BY DATETIME DESC ';
        console.log(queryString);
        return queryString;
    }
    function discoveriesSQL(){
      var queryString = 'SELECT COUNT(t1.event.value.string_value), '
        queryString +=  'date(CAST(t1.event.value.string_value as DATETIME)) as DATETIME '
        queryString +=  'FROM (SELECT event, event_timestamp '
        queryString +=  'FROM `analytics_156405695.events_*` '
        queryString +=  ',UNNEST(event_params) as event '
        queryString +=  'WHERE event_name = "service_discovered") as t1 '
          queryString +=  'WHERE t1.event.key = "time" '
          queryString +=  'GROUP BY DATETIME '
        queryString +=  'ORDER BY DATETIME DESC ';
        console.log(queryString);
      return queryString;
    }

    function connectionsSQL(){
        var queryString = 'SELECT COUNT(t1.event.value.string_value), '
        queryString +=  'date(CAST(t1.event.value.string_value as DATETIME)) as DATETIME '
        queryString +=  'FROM (SELECT event, event_timestamp '
        queryString +=  'FROM `analytics_156405695.events_*` , '
        queryString +=  'UNNEST(event_params) as event '
          queryString +=  'WHERE event_name = "conn_completed") as t1 '
          queryString +=  'WHERE t1.event.key = "time_finished" '
          queryString +=  'GROUP BY DATETIME '
        queryString +=  'ORDER BY DATETIME DESC ';
        console.log(queryString);
        return queryString;
    }

    function connectionsFailedSQL(){
        var queryString = 'SELECT COUNT(t1.event.value.string_value), '
        queryString +=  'date(CAST(t1.event.value.string_value as DATETIME)) as DATETIME '
        queryString +=  'FROM (SELECT event, event_timestamp '
        queryString +=  'FROM `analytics_156405695.events_*` ,'
        queryString +=  'UNNEST(event_params) as event '
        queryString +=  'WHERE event_name = "conn_failed") as t1 '
        queryString +=  'WHERE t1.event.key = "time_failed" '
        queryString +=  'GROUP BY DATETIME '
        queryString +=  'ORDER BY DATETIME DESC ';
        console.log(queryString);
        return queryString;
    }

    function connectionsStartedSQL(){
        var queryString = 'SELECT COUNT(t1.event.value.string_value), ' 
        queryString +=  'date(CAST(t1.event.value.string_value as DATETIME)) as DATETIME '
        queryString +=  'FROM (SELECT event, event_timestamp '
        queryString +=  'FROM `analytics_156405695.events_*` , '
        queryString +=  'UNNEST(event_params) as event '
        queryString +=  'WHERE event_name = "conn_started") as t1 '
        queryString +=  'WHERE t1.event.key = "time_started" '
        queryString +=  'GROUP BY DATETIME '
        queryString +=  'ORDER BY DATETIME DESC ';
        console.log(queryString);
        return queryString;
    }

    function transferTimeSQL(){
 	var queryString = 'SELECT avg(t1.event_param.value.int_value) as time, t2.event_param.value.int_value	as size, date(CAST(t3.event_param.value.string_value as DATETIME)) as date '
	queryString +=  'FROM (SELECT event_param, event.timestamp_micros '
	queryString +=  'FROM `io_fluentic_ubicdn_ANDROID.app_events_*` , '
	queryString +=  'UNNEST(event_dim) as event, '
	queryString +=  'UNNEST(event.params) as event_param '
	queryString +=  'WHERE event.name = "video_received") as t1 '
	queryString +=  'JOIN (SELECT event_param, event.timestamp_micros '
	queryString +=  'FROM `io_fluentic_ubicdn_ANDROID.app_events_*`, '
	queryString +=  'UNNEST(event_dim) as event, '
	queryString +=  'UNNEST(event.params) as event_param '
	queryString +=  'WHERE event.name = "video_received") as t2 '
	queryString +=  'ON t1.timestamp_micros = t2.timestamp_micros '
	queryString +=  'JOIN (SELECT event_param, event.timestamp_micros '
	queryString +=  'FROM `io_fluentic_ubicdn_ANDROID.app_events_*`, '
	queryString +=  'UNNEST(event_dim) as event, '
	queryString +=  'UNNEST(event.params) as event_param '
	queryString +=  'WHERE event.name = "video_received") as t3 '
	queryString +=  'ON t2.timestamp_micros = t3.timestamp_micros '
	queryString +=  'WHERE t1.event_param.key = "transferTime" '
	queryString +=  'AND t2.event_param.key = "size" '
	queryString +=  'AND t3.event_param.key = "time" '
	queryString +=  'GROUP BY date, size '
	queryString +=  'ORDER BY size DESC ';
	//queryString +=  'LIMIT 30';
	return queryString;
    }

    // When a BigQuery job has completed, fetch the results.
    function getQueryResults(jobId,queryId){
      var request = gapi.client.bigquery.jobs.getQueryResults({
	'projectId': billingProjectId,
	'jobId': jobId
      });
      request.execute(function(response){
         process(response.result.rows,queryId);
      })
    }

    function process(rows,queryId){
	    //var heatmapData = [];
	    //if (heatmap!=null){
	    //    heatmap.setMap(null);
	   // }
	    var x = [];
	    var y = [];
	    var z = [];
 		    console.log(queryId);
	    if(queryId=="transferTime")
	    {
 		    console.log("Z");
		    for (var i = 0; i < rows.length; i++) {
			var f = rows[i].f;
			var results = { y: parseFloat(f[0].v), x: f[2].v, z: parseInt(f[1].v) };
			//console.log(results.x+" "+results.y+" "+results.z);
			//var latLng = new google.maps.LatLng(coords);
			x.push(results.x);
			y.push(results.y);
			z.push(results.z);
		    }
	

	    } else {

		    var x = [];
		    var y = [];
		    for (var i = 0; i < rows.length; i++) {
			var f = rows[i].f;
			var results = { y: parseFloat(f[0].v), x: f[1].v };
			//var latLng = new google.maps.LatLng(coords);
			x.push(results.x);
			y.push(results.y);
		    }
	    }
	    //console.log(x);

	    //connectionTime = [{ x: ['giraffes', 'orangutans', 'monkeys'], y: [20, 14, 23],type: 'bar'}];
	    //console.log(discoveries);
	   // console.log(connectionTime);
	    //heatmap = new google.maps.visualization.HeatmapLayer({
	    //                                                     data: heatmapData
	    //                                                     });
	    //heatmap.setMap(map);

	    switch(queryId){
		/*case "discoveries":
		//    console.log(data);
		//    console.log(data.length);
		    var data = {x: x,y: y,  name: "Service discoveries", type: 'bar'};
		    Plotly.newPlot('dDiv', [data],{yaxis:{title: '# discoveries'}});
		    break;*/
		case "discoveries":
		    //console.log(data);
		   // console.log("Connections"+failedConnections);
		    var data = {x: x,y: y,  name: "Total discoveries", type: 'bar'};
		    discoveries = data;
		    if(typeof(startedConnections) != 'undefined'){
			  //  console.log("Connections1"+connections);
			  //  console.log("Failed1"+failedConnections);
		    	plotData = [discoveries,startedConnections];
		    	Plotly.newPlot('dDiv', plotData,{barmode: 'group',yaxis:{title: '# discoveries'}});
		    }
		    break;
		    
		case "startedConnections":
		    //console.log(data);
		    //console.log("Failed"+connections);
		    var data = {x: x,y: y,  name: "Discoveries missing content", type: 'bar'};
		    startedConnections = data;
		    if(typeof(discoveries) != 'undefined'){
	  	    	//console.log("Connections2"+connections);
			//console.log("Failed2"+failedConnections);
		    	plotData = [discoveries,startedConnections];
		    	Plotly.newPlot('dDiv', plotData,{barmode: 'group',yaxis:{title: '# discoveries'}});
		    }
		    break;		   
		case "connections":
		    //console.log(data);
		   // console.log("Connections"+failedConnections);
		    var data = {x: x,y: y,  name: "Successful connections", type: 'bar'};
		    connections = data;
		    if(typeof(failedConnections) != 'undefined'){
			  //  console.log("Connections1"+connections);
			  //  console.log("Failed1"+failedConnections);
		    	plotData = [connections,failedConnections];
		    	Plotly.newPlot('cDiv', plotData,{barmode: 'group',yaxis:{title: '# connections'}});
		    }
		    break;
		    
		case "failedConnections":
		    //console.log(data);
		    //console.log("Failed"+connections);
		    var data = {x: x,y: y,  name: "Failed connections", type: 'bar'};
		    failedConnections = data;
		    if(typeof(connections) != 'undefined'){
	  	    	//console.log("Connections2"+connections);
			//console.log("Failed2"+failedConnections);
		    	plotData = [connections,failedConnections];
		    	Plotly.newPlot('cDiv', plotData,{barmode: 'group',yaxis:{title: '# connections'}});
		    }
		    break;
		    
		case "connectionTime":
		   // console.log(data);
		   // console.log(data.length);
		    var data = {x: x,y: y,  name: "Connection time",type: 'bar'};
		    Plotly.newPlot('ctDiv', [data],{yaxis:{title: 'Average connection time (ms)'}});
		    break;
		    
		case "transferTime":
		   // console.log(data);
		   // console.log(data.length);
 		    console.log(x.length+" "+z.length+" "+y.length);
		    var plot = [];
		    var x1 = [];
		    var y1 = [];
		    var bytes = z[0];
		    for (var i = 0; i < z.length; i++) {


			console.log(x[i]+" "+y[i]+" "+ Math.round(z[i]/1024));
			if(bytes!=z[i]){
			console.log("Push "+x[i]+" "+y[i]+" "+ Math.round(z[i]/1024));
				plot.push({x: x1,y: y1,  name: Math.round(bytes/1024)+" bytes", type: 'bar'});
				x1 = [];
				y1 = [];
			}
			x1.push(x[i]);
			y1.push(y[i]);
			bytes = z[i];
		    }
				plot.push({x: x1,y: y1,  name: Math.round(bytes/1024)+" bytes", type: 'bar'});
		    console.log(plot);
		    //plotData = [{x: x,y: y,  name: "Failed connections", type: 'bar'},{x: x,y: y,  name: "Failed connections", type: 'bar'}];
		    //var data = {x: x,y: y,  name: "Transfer time", type: 'bar'};
		    Plotly.newPlot('tDiv', plot,{barmode: 'group',yaxis:{title: 'Average transfer time (ms)'}});
		    break;
	    }


}


