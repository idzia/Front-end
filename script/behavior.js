
function valid() {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('e-mail').value;
    if (name == "" || email == "") {
        return false;
    } else return true;
}

function switchVisibility() {
    var sendButton = document.getElementById('send');
    var check = valid();
    console.log(check);
    if (check) {
        sendButton.removeAttribute("disabled");
    } else 
        sendButton.setAttribute("disabled", "true");
}

function showError(id) {
    document.getElementById(id).style.display = 'block';
}

