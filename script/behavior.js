
function isEmpty() {
    const name = document.getElementById('fname').value;
    const email = document.getElementById('e-mail').value;
    if (name == "" || email == "") {
        return true;
    } else {
        return false;
    }
}

function toggleDisabled() {
    const sendButton = document.getElementById('send');
    const check = isEmpty();
    console.log(check);
    if (check) {
        sendButton.setAttribute("disabled", "true");
    } else {
        sendButton.removeAttribute("disabled");
    }
}

function showError(id) {
    document.getElementById(id).style.display = 'block';
}

function validation(evt) {
    const name = document.getElementById('fname').value;
    const email = document.getElementById('e-mail').value;
    const message = document.getElementById('message').value;
    const correctName = /^([A-Z]{1}[a-z]{1,31}\s*)+$/;
    const correctEmail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    const correctMessage = /^\w+/
    console.log(name);
    if (correctName.test(name) && correctEmail.test(email) && correctMessage.test(message)) {
        alert("Congratulations! You send correctly message");
    } else {
        showError('fname-error');
        showError('email-error');
        showError('message-error');
        evt.preventDefault();
    }
}

function userValidation() {
    const login = document.getElementById('uname').value;
    const password = document.getElementById('password').value;
    const correctLogin = "idzia";
    const correctPassword = "12345";
    const role = "student";
    if (login == correctLogin && password == correctPassword) {
        return role;
    } else {
        showError('login-error');
        return false;
    }
}

function init() {
    document.getElementById("fname").addEventListener('keyup', toggleDisabled);
    document.getElementById("e-mail").addEventListener('keyup', toggleDisabled);
    document.getElementById("contact").addEventListener('submit', validation);
}

init();





// walidacja Imienia: ^([A-Z]{1}[a-z]{1,31}\s*)+$
// walidacja e-mail: ^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$
// walidacja Login: ^\w+$
// walidacja hasło: ^(.+){8,20}$