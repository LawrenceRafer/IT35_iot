// check login status
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGIN
function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUser = "rence";
    const correctPass = "1234";

    if (username === correctUser && password === correctPass) {

        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";

    } else {

        document.getElementById("error").innerText = "Invalid username or password";

    }
}

// LOGOUT
function logout() {

    localStorage.setItem("loggedIn", "false");
    window.location.href = "login.html";

}