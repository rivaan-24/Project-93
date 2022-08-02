var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("user_name");

var firebaseConfig = {
    apiKey: "AIzaSyCGaO-kkPB3Z4KyevzF6796WPwFuHFDBKU",
    authDomain: "let-s-chat-app-b80a4.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-b80a4-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-b80a4",
    storageBucket: "let-s-chat-app-b80a4.appspot.com",
    messagingSenderId: "374208897298",
    appId: "1:374208897298:web:b1468732e53725db9113cb"
  };
  
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.database.appId);
function log_out() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "sign_in_page.html";
}
function send_message(){
    message_holder = document.getElementById("message_holder").value;
    console.log("before database");
    console.log(firebase.database.appId);
    firebase.database().ref(room_name).push({ name: user_name, message: message_holder, like: 0 })
    console.log("After database insert");
    document.getElementById("message_holder").value = "";
}
function getData(){
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                    firebase_message_id = childKey;
                    message_data = childData;
                    //Start code
                    name1 = message_data["name"];
                    message = message_data["message"];
                    like = message_data["like"];
                    name_with_tag = "<h4> " + name1 + "<img src = 'tick.png' class = 'user_tick'> </h4>";
                    message_with_tag = "<h4 class = 'message_h4'> " + message + "</h4>";
                    like_button = "<button class = 'btn btn - warning' id = ' " + firebase_message_id + "' value = ' " + like + "' onclick = 'updateLike(this.id)'>";
                    span_with_tag = "<span class = 'glyphicon glyphicon - thumbs-up'> Like: " + like + "</span> </button> <hr>";
                    row = name_with_tag + message_with_tag + like_button + span_with_tag;
                    document.getElementById("output").innerHTML += row;
                    //End code
              }
        });
  });
}