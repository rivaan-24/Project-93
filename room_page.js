var user_name = localStorage.getItem("username");
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

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log(Room_names);
            //Start code
            var row = "<div class='room_name' id='" + Room_names + "' onclick='redirect_to_room_screen(this.id)'> #" + Room_names + "</div> <hr>"
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();
function log_out() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "sign_in_page.html";
}
function add_room() {
    var Room_name = document.getElementById("enter_room").value;
    localStorage.setItem("room_name", Room_name);
    firebase.database().ref("/").child(Room_name).update({ purpose: "adding room name" });
    window.location = "chat_page.html";
}
function redirect_to_room_screen(room_name_id) {
    console.log(room_name_id);
   roomNames = localStorage.getItem("room_name");
    window.location = "chat_page.html";
}
document.getElementById("greeting_tag1").innerHTML = "Welcome " + user_name + ", to the world of Let's Chat...";