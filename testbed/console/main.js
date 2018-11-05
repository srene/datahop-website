

var auth = firebase.auth();
var db = firebase.firestore();
var storageRef = firebase.storage().ref();

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

var backendHostUrl = 'http://localhost:8080';

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
    storageRef.child('testbed/' + file.name).put(file, metadata).then(function(snapshot) {
    	console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    	console.log('File metadata:', snapshot.metadata);
        upButton.disabled = false;
    	upButton.innerText = "Upload";                                  
   	// Let's get a download URL for the file.
    	snapshot.ref.getDownloadURL().then(function(url) {
	var title = document.getElementById('title').value;
	var desc = document.getElementById('desc').value;
    	console.log('File available at', url,title,desc);
	var video = {
      		title: title,
      		desc: desc,
      		url: url,
		user: user.uid,
		time: getFormattedDate()
    	}
	db.collection("videos").add(video);	
	});
    }).catch(function(error) {
     // [START onfailure]
      console.error('Upload failed:', error);
      // [END onfailure]
    });
    // [END oncomplete]
}

function listVideos(user) {

   db.collection("videos").where("user", "==", user.uid)
   //db.collection("videos").get()
	 .onSnapshot(function(querySnapshot) {

	    querySnapshot.forEach(function(doc) {
		console.log(doc.data());
		var node = document.createElement('dt');
		var textnode = document.createTextNode(doc.data().title);         // Create a text node
		node.appendChild(textnode); 	
		document.getElementById("videos").appendChild(node);
		node.addEventListener("click", function(){
  			$('.dd--active').not($(this).next()).slideUp(300).removeClass('dd--active');
  			$(this).next().toggleClass('dd--active').slideToggle(300)
		});
		node.addEventListener("click",function(t) {
  			return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
		});
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
		
		document.getElementById("videos").appendChild(desc);

	    });
	});
}

function listDevices(user)
{
db.collection("users").get()
	    .then(function(querySnapshot) {

	    querySnapshot.forEach(function(doc) {
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
		document.getElementById("devices").appendChild(desc);

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

  console.log(document.getElementById('video-list'));
  // Listen for auth state changes
  auth.onAuthStateChanged(onAuthStateChanged);
  document.getElementById('log-out').addEventListener('click', toggleSignIn, false);
  // Saves message on form submit.
  videoFile.addEventListener('change', handleFileSelect, false);
  videoFile.disabled = true;

  showSection(videoListSection);

}, false);

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
