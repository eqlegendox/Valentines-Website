function appearPassword() {
    const Password1 = document.getElementById('hint1');
    const Password2 = document.getElementById('hint2');

    Password1.style.display = 'block';
    Password2.style.display = 'block';
}

function auth() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email == "ilovemyboyfriend@gmail.com" && password == "dannyiscool") {
        window.location.assign("landingpage.html");
        alert("Login successful")
    }
    else{
        alert("Invalid information")
        return;
    }
}
