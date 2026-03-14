function validateLogin() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    if (username === "" || password === "") {
        error.textContent = "Username and password are required.";
        return false;
    }
    return true;
}