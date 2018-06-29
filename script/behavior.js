
function isEmpty() {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('e-mail').value;
    if (name == "" || email == "") {
        return true;
    } else return false;
}

function switchVisibility() {
    var sendButton = document.getElementById('send');
    var check = isEmpty();
    console.log(check);
    if (check) {
        sendButton.setAttribute("disabled", "true");
    } else 
        sendButton.removeAttribute("disabled");      
}

function showError(id) {
    document.getElementById(id).style.display = 'block';
}

function validation() {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('e-mail').value;
    var message = document.getElementById('message').value;
    var correctName = /^([A-Z]{1}[a-z]{1,31}\s*)+$/;
    var correctemail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    var correctmessage = /^\w+/
    console.log(name);
    if (correctName.test(name) && correctemail.test(email) && correctmessage.test(message)) {
        return true;
    } else
        showError('fname-error');
        showError('email-error');
        showError('message-error');
        return false;

}


// walidacja Imienia: ^([A-Z]{1}[a-z]{1,31}\s*)+$
// walidacja e-mail: ^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$
// walidacja Login: ^\w+$
// walidacja hasło: ^(.+){8,20}$