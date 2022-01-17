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
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>"+ message + "</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: "+ like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
     } });  }); }
getData();
function updatelike(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
updatedlikes = Number(likes)+ 1;
firebase.database().ref(room_name).child(message_id).update({
like: updatedlikes   
});
}
function logout()
{
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";

}
