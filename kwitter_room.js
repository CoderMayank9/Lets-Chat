
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCpTmoKuEws-Wh4IOdzD0TQnhL_zhLqcrc",
      authDomain: "lets-chat-3f034.firebaseapp.com",
      databaseURL: "https://lets-chat-3f034-default-rtdb.firebaseio.com",
      projectId: "lets-chat-3f034",
      storageBucket: "lets-chat-3f034.appspot.com",
      messagingSenderId: "201506608902",
      appId: "1:201506608902:web:9f0af9941dfed14744f087"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "welcome "+ username + " !";
function addroom()
{
roomname = document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
purpose:"addingroomname"
});
localStorage.setItem("roomname",roomname);
window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomnames - " + Room_names);
row  = "<div class = 'room_name' id = "+ Room_names+" onclick = 'redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("roomname", name);
window.location = "kwitter_page.html";

}
function logout()
{
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location = "index.html";

}
