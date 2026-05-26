document.getElementById("loginbtn").addEventListener("click", function () {
    const x = document.getElementById("myId").value;
    const y = document.getElementById("mypass").value;

    if (x == "1234" && y == "abcd") {
        alert("Login successful");

        window.location.href = "home.html";
    } 
    else {
        alert("Password incorrect");
    }
});