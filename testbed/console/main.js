var auth = firebase.auth();
var db = firebase.firestore();
//var db = firebase.database();
var storageRef = firebase.storage().ref();
var chunk=[];
var chunkId=[];
var devices=[];
var devicesId=[];
var videoList=[];
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
var currentUID;
var file;
var metadata;

var videoListSection = document.getElementById('video-list');
var deviceListSection = document.getElementById('device-list');
var reportListSection = document.getElementById('report-list');
var upButton = document.getElementById('upload-button');
var videoFile = document.getElementById('file');

//var backendHostUrl = 'http://localhost:8080';

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    file = evt.target.files[0];
    upButton.disabled = false;
    metadata = {
        'contentType': file.type
    };

}

/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
 */
function onAuthStateChanged(user) {
  // We ignore token refresh events.
  if (user && currentUID === user.uid) {
    return;
  }

  //cleanupUi();
  if (user) {

    currentUID = user.uid;
    videoFile.disabled = false;

    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    listVideos(user);
    listDevices(user);
    upButton.addEventListener('click', function(){upload(user);}, false);
  } else {
    // Set currentUID to null.
    currentUID = null;
    // Display the splash page where you can sign-in.
    //splashPage.style.display = '';
    window.location="/testbed";
  }
}

function getFormattedDate(){
    var d = new Date();

    d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);

    return d;
}

function upload(user){
    // Push to child path.
    // [START oncomplete]
    console.log("Upload");
    upButton.disabled = true;
    upButton.innerText = "Uploading...";
    var filenm = document.getElementById('title').value+'.mp4'
    storageRef.child('testbed/'+filenm).put(file, metadata).then(function(snapshot) {
    	console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    	console.log('File metadata:', snapshot.metadata);
      upButton.disabled = false;
    	upButton.innerText = "Upload";
   	// Let's get a download URL for the file.
    	snapshot.ref.getDownloadURL().then(function(url) {
            var title = document.getElementById('title').value;
            var desc = document.getElementById('desc').value;
            var chunk = document.getElementById('chunk').value  * 1024 * 1024;
            var chunkNumber = file.size / chunk;
            console.log('File available at', url,title,desc,Math.ceil(chunkNumber));
            var video = {
                    title: title,
                    desc: desc,
                    url: url,
                    user: user.uid,
                    time: getFormattedDate(),
                    chunk: 0,
                    chunkSize: chunk,
                    fileName: filenm,
                    totalChunk: Math.ceil(chunkNumber)//,
                }
            //var newVideoKey = firebase.database().ref().child('videos').push().key;
            db.collection("videos").add(video).then(function(docRef) {
            //var newVideo = {};
            //newVideo['/videos/' + newVideoKey] = video;
            //db.ref().update(newVideo);
               console.log("Document written with ID: ", docRef.id);
                                                  document.getElementById('title').value = null;
                                                  document.getElementById('desc').value = null;
                                                  videoFile.value = null;
                                                  document.getElementById('chunk').value = null;
                                                  location.reload();

             })
        });
    }).catch(function(error) {
     // [START onfailure]
      console.error('Upload failed:', error);
      // [END onfailure]
    });
    // [END oncomplete]
}

function listVideos(user) {

   db.collection("videos").where("user", "==", user.uid).where("chunk","==",0)
   //db.collection("videos").get()
	 .onSnapshot(function(querySnapshot) {
                 var videoList = document.getElementById("videos");
                 while( videoList.firstChild ){
                 videoList.removeChild( videoList.firstChild );
                 }
            	    querySnapshot.forEach(function(doc) {
                        		//console.log(doc.data());


                        		var node = document.createElement('dt');
                        		var textnode = document.createTextNode(doc.data().title);         // Create a text node
                        		node.appendChild(textnode);
                        		node.addEventListener("click", function(){
                          			$('.dd--active').not($(this).next()).slideUp(300).removeClass('dd--active');
                          			$(this).next().toggleClass('dd--active').slideToggle(300)
                        		});
                        		node.addEventListener("click",function(t) {
                          			return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                        		});
                                videoList.appendChild(node);

                        		var desc = document.createElement('dd');

                        		var name = document.createElement('span');
                        		var textdesc = document.createTextNode(doc.data().desc);         // Create a text node
                        		name.appendChild(textdesc);


                        		name.appendChild(document.createElement('br'));
                        		desc.appendChild(name);

                        		var link = document.createElement('span');
                        		var a = document.createElement('a');
                                a.setAttribute('href', doc.data().url);
                        		a.appendChild(document.createTextNode("Video link" + ' '));
                        		link.appendChild(a);
                        		link.appendChild(document.createElement('br'));
                        		desc.appendChild(link);

                        		var time = document.createElement('span');
                        		var textdesc = document.createTextNode("Uploaded time: "+doc.data().time);         // Create a text node
                        		time.appendChild(textdesc);
                        		time.appendChild(document.createElement('br'));
                        		desc.appendChild(time);


                                 /* var list = document.createElement('span');
                                  var textdesc = document.createTextNode("Source node ");         // Create a text node
                                  var select = document.createElement('select');
                                  select.multiple = true;
                                  select.size = 5;
                                  //console.log("user");
                                  devices.forEach(function(item, index, array) {
                                      //console.log("user",item)
                                      var option = document.createElement('option');
                                    option.value = devicesId[index];
                                    option.innerHTML= item;
                                    select.appendChild(option);
                                  });
                                  list.appendChild(textdesc);
                                  list.appendChild(select);
                                  list.appendChild(document.createElement('br'));
                                  desc.appendChild(list);*/

                            var btn = document.createElement("button");        // Create a <button> element
                            var t = document.createTextNode("Delete video");       // Create a text node
                            btn.appendChild(t);
                            btn.onclick = function() { deleteVideo(doc.data().title);};                           // Append the text to <button>
                            desc.appendChild(btn);

                        		videoList.appendChild(desc);

            	    });
	});
}

function listDevices(user)
{
 // console.log("List devices");
db.collection("users").get()
	    .then(function(querySnapshot) {

	    querySnapshot.forEach(function(doc) {
        //console.log("List devices ",doc.data().model);

		var node = document.createElement('dt');
		var textnode = document.createTextNode(doc.data().model);         // Create a text node
		node.appendChild(textnode);
		document.getElementById("devices").appendChild(node);
		node.addEventListener("click", function(){
  			$('.dd--active').not($(this).next()).slideUp(300).removeClass('dd--active');
  			$(this).next().toggleClass('dd--active').slideToggle(300)
		});
		node.addEventListener("click",function(t) {
  			return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
		});

		var desc = document.createElement('dd');
		var name = document.createElement('span');
		var textdesc = document.createTextNode("User: "+doc.data().name+"\n\n");         // Create a text node
		name.appendChild(textdesc);
		name.appendChild(document.createElement('br'));
		desc.appendChild(name);
		var version = document.createElement('span');
		var textdesc = document.createTextNode("OS Version: "+doc.data().version+"\n\n");         // Create a text node
		version.appendChild(textdesc);
		version.appendChild(document.createElement('br'));
		desc.appendChild(version);
		var time = document.createElement('span');
		var textdesc = document.createTextNode("Last time logged in: "+doc.data().time+"\n\n");         // Create a text node
		time.appendChild(textdesc);
		time.appendChild(document.createElement('br'));
		desc.appendChild(time);

      var list = document.createElement('span');
      //list.style = "margin-left: 3em;";
      var textdesc = document.createTextNode("Source node: ");         // Create a text node
      list.appendChild(textdesc);

      var list2 = document.createElement('span');
      list2.style = "margin-left: 2em;";
      var textdesc1 = document.createTextNode("video");         // Create a text node
      list2.appendChild(textdesc1);
      var selVideo = document.createElement('select');
      //list.style.display = "none";
      //list2.style.display = "none";
      //selVideo.id = 'selVideo'+doc.id;
      //selVideo.multiple = true;
      //selVideo.size = 5;
      //sel.addEventListener('change', scopepreserver(sel));
      //sel.addEventListener('change', selectValue(doc.data().model))
      if(videoList.length>0){
        videoList.forEach(function(item, index, array) {
                        //console.log("user",item)
                        //list.style.display = "block";
                        //list2.style.display = "block";
                        var option = document.createElement('option');
                        option.value = index;
                        option.innerHTML= item;
                        selVideo.appendChild(option);
                      });
      } else {
        list.style.display = "none";
        list2.style.display = "none";
      }
      list2.appendChild(selVideo);

      var list3 = document.createElement('span');
      list3.style = "margin-left: 2em;";
      var textdesc2 = document.createTextNode("chunk");         // Create a text node
      list3.appendChild(textdesc2)
      var selChunk = document.createElement('select');
      selChunk.multiple = true;
      selChunk.size = 5;
      //list3.style.display = "none";


      if(chunk.length>0){
        chunk[0].forEach(function(item, index, array) {
                        console.log("user",item)
                        var option = document.createElement('option');
                        option.value = chunkId[0][index];
                        option.innerHTML= item;
                        //option.selected = "true";
                        selChunk.appendChild(option);

                        /*db.collection("source").where("user", "==", true)
                            .get()
                            .then(function(querySnapshot) {
                                querySnapshot.forEach(function(doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    console.log(doc.id, " => ", doc.data());
                                });
                            })
                            .catch(function(error) {
                                console.log("Error getting documents: ", error);
                            });*/
                      });
      } else {
        list3.style.display = "none";
      }
      //sel.addEventListener('change', scopepreserver(sel));
      //sel.addEventListener('change', selectValue(doc.data().model))
      list3.appendChild(selChunk);

      selVideo.addEventListener('change', selectVideo(selVideo,selChunk,doc.id));
      selChunk.addEventListener('change', getSelectValues(selChunk,doc.data().user_id));


      //list2.appendChild(document.createElement('br'));
      desc.appendChild(list);
      desc.appendChild(list2);
      desc.appendChild(list3);

     //$('select').change(function() {alert($(this).val())})
        document.getElementById("devices").appendChild(desc);


	    });
	});

}

function selectVideo(selectVideo,selectChunk,user)
{
  return function (){
    var result = [];
    var options = selectVideo && selectVideo.options;
    var opt;
    //console.log(options[options.selectedIndex].value);
    while (selectChunk.options.length > 0) {
       selectChunk.remove(0);
    }

    chunk[options[options.selectedIndex].value].forEach(function(item, index, array) {
                    //console.log("user",item,index)
                    var option = document.createElement('option');
                    option.value = chunkId[options.selectedIndex][index];
                    option.innerHTML= item;
                    selectChunk.appendChild(option);
                  });

  }
}

function getSelectValues(select,user) {
    return async function () {
        var result = [];
        var options = select && select.options;
        var opt;

        for (var i=0, iLen=options.length; i<iLen; i++) {
            opt = options[i];
            //console.log(user,opt.value);

            var query = db.collection('source').where('user','==',user).where('video','==',opt.value);

            await deleteOpt(query);
            if(opt.selected){
              db.collection("source").add({
                 user: user,
                 video: opt.value});
            }
        }

     }
}


async function deleteOpt(queryRef) {
    console.log("start")
    try {
       var allCitiesSnapShot = await queryRef.get();
       allCitiesSnapShot.forEach(doc => {
           console.log(doc.id, '=>', doc.data().name);
           db.collection('source').doc(doc.id).delete();
       });
       console.log("end")
   }
   catch (err) {
       console.log('Error getting documents', err);
   }
}


function deleteVideo(videoName)
{
var query = db.collection('videos').where('title','==',videoName);
  query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // Create a reference to the file to delete
      var fileFolder;
    if(doc.data().chunk==0)fileFolder="testbed/";
    else fileFolder="video/";
    var desertRef = storageRef.child(fileFolder+doc.data().fileName);

      // Delete the file
      desertRef.delete().then(function() {
        console.log("File deleted successfully");
        location.reload();
      }).catch(function(error) {
        console.error(error);
        // Uh-oh, an error occurred!
      });
      doc.ref.delete();
    });
  });

}


/**
 * Handles the sign in button press.
 */
function toggleSignIn() {

	if (auth.currentUser) {
	    // [START signout]

	    auth.signOut();
	    // [END signout]
	}
}

// [END gae_python_firebase_login]

// [START gae_python_fetch_notes]
// Fetch notes from the backend.
function fetchNotes() {
$.ajax(backendHostUrl + '/notes', {
/* Set header for the XMLHttpRequest to get data from the web server
associated with userIdToken */
headers: {
'Authorization': 'Bearer ' + userIdToken
}
}).then(function(data){
$('#notes-container').empty();
// Iterate over user data to display user's notes from database.
data.forEach(function(note){
$('#notes-container').append($('<p>').text(note.message));
});
});
}

window.addEventListener('load', function() {
  // Bind Sign in button.
  console.log("load");
  loadChunks();
  loadDevices();
  // Listen for auth state changes
  auth.onAuthStateChanged(onAuthStateChanged);
  document.getElementById('log-out').addEventListener('click', toggleSignIn, false);
  // Saves message on form submit.
  videoFile.addEventListener('change', handleFileSelect, false);
  videoFile.disabled = true;

  showSection(videoListSection);

}, false);

function loadChunks()
{

    var videoRef = db.collection("videos").orderBy("fileName","asc");
    var videoTitle = "";
    var i=-1;
    videoRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              //console.log(doc.data())
              if(videoTitle!=doc.data().title){
                i++;

                console.log("Videotitle ",doc.data().title);
                //chunk[i] = new Arrray(doc.data().totalChunk);
                //chunkId[i] = new Arrray(doc.data().totalChunk);
                //chunk[i] =
                chunk[i] = [];
                chunkId[i] = [];
                videoTitle = doc.data().title;
              }
              if(doc.data().chunk==0){
                //console.log("Videotitle ",doc.data().title+": "+doc.data().desc)
                videoList.push(doc.data().title+": "+doc.data().desc);
              } else if(doc.data().chunk!=0){
                //console.log("Videotitle ",doc.data().desc+": "+doc.data().chunk)
                  chunk[i].push(doc.data().desc+" chunk "+doc.data().chunk);
                  chunkId[i].push(doc.id);
              }

              chunk.forEach(function(item, index, array) {
                              //console.log("user",item)
                              chunk[index].sort();
                            });
            });
    });


}

function loadDevices()
{
    /*jQuery(document).ready(function($) {
     var comboTree1 = $('#example').comboTree({ source : myData,isMultiple: true});
     });*/
    var userRef = db.collection("users");
    userRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if(doc.data().chunk!=0){
                devices.push(doc.data().name+" "+doc.data().model);
                devicesId.push(doc.id);
                }
          });
    });

}
/**
 * Displays the given section element and changes styling of the given button.
 */
function showSection(sectionElement) {
  videoListSection.style.display = 'none';
  deviceListSection.style.display = 'none';
  reportListSection.style.display = 'none';


  if (sectionElement) {
    sectionElement.style.display = 'block';
  }

}
