var auth = firebase.auth();
var db = firebase.firestore();
//var db = firebase.database();
var storageRef = firebase.storage().ref();
var chunk=[];
var chunkId=[];
var devices=[];
var devicesId=[];

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
    listDevices(user);
    listVideos(user);
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


                                  var list = document.createElement('span');
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
                                  desc.appendChild(list);

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
      var textdesc = document.createTextNode("Source node ");         // Create a text node
      var sel = document.createElement('select');
      sel.id = 'sel'+doc.id;
      sel.multiple = true;
      sel.size = 5;
      sel.addEventListener('change', getSelectValues(sel,doc.id));
      //sel.addEventListener('change', scopepreserver(sel));
      //sel.addEventListener('change', selectValue(doc.data().model))
      chunk.forEach(function(item, index, array) {
                     // console.log("user",item)
                      var option = document.createElement('option');
                      option.value = chunkId[index];
                      option.innerHTML= item;
                      sel.appendChild(option);
                      });
      list.appendChild(textdesc);
      list.appendChild(sel);
      list.appendChild(document.createElement('br'));
      desc.appendChild(list);
    
     //$('select').change(function() {alert($(this).val())})
        document.getElementById("devices").appendChild(desc);
        

	    });
	});

}

function getSelectValues(select,user) {
    return function () {
        var result = [];
        var options = select && select.options;
        var opt;

        for (var i=0, iLen=options.length; i<iLen; i++) {
            opt = options[i];
            console.log(user,opt.value);
            
            if(!opt.selected){
            var query = db.collection('source');
            var query = db.collection('source').where('user','==',user).where('video','==',opt.value);
            query.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                console.log(doc.id);
                 db.collection("source").doc(doc.id).delete().then(function() {
                   console.log("Document successfully deleted!");
                   }).catch(function(error) {
                            console.error("Error removing document: ", error);
                            });
                
               });
            });
            
            } else if (opt.selected) {
                //result.push(opt.value || opt.text);
                console.log(opt.value,opt.text);
                db.collection("source").add({
                    user: user,
                    video: opt.value});
            }
        }
    }
    //return result;
}

function scopepreserver(sel) {
    return function () {
        alert(sel.id);
    };
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
    /*jQuery(document).ready(function($) {
            var comboTree1 = $('#example').comboTree({ source : myData,isMultiple: true});
    });*/
    var videoRef = db.collection("videos").orderBy("fileName","asc");
    //var videoRef = db.collection("videos");
    videoRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            //console.log(doc.data())
            if(doc.data().chunk!=0){
                chunk.push(doc.data().desc+" chunk "+doc.data().chunk);
                chunkId.push(doc.id);
            }
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


