function addUser() {
    add_username = document.getElementById("user_name").value;

    if (add_username == "") {
        window.alert("Please enter a valid username (Please enter a letter or number).");
        document.getElementById("user_name").color = red;
    }
    else {
        localStorage.setItem("username", add_username);
        window.location = "room_page.html";
    }
}