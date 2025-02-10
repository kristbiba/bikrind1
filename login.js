import "./firebase-config.js"; // Import Firebase configuration

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "admin.html"; // Redirect to admin page
        })
        .catch((error) => {
            alert("Login Failed: " + error.message);
        });
});
