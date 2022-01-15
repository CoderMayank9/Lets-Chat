//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyApcO61g_6_Ysk2qxgjpUw1QlnL8stfDtY",
      authDomain: "kwitter-14b99.firebaseapp.com",
      databaseURL: "https://kwitter-14b99-default-rtdb.firebaseio.com",
      projectId: "kwitter-14b99",
      storageBucket: "kwitter-14b99.appspot.com",
      messagingSenderId: "694075500333",
      appId: "1:694075500333:web:a2eaae1d307d096f3455a4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    room_name = localStorage.getItem("roomname");
    document.getElementById("room").innerHTML="Room Name: "+room_name;
    function send()
    {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:username,
message:msg,
like: 0
});
document.getElementById("msg").value="";

    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";

}
