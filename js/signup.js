// signup validation
function validateForm() {
    var name = document.forms["membersignupform"]["inputFName"].value;
    var surname = document.forms["membersignupform"]["inputLName"].value;
    var email = document.forms["membersignupform"]["inputEmail"].value;
    var birthday = document.forms["membersignupform"]["inputDate"].value;
    var male = document.forms["membersignupform"]["male"];
    var female = document.forms["membersignupform"]["female"];
    var check = document.forms["membersignupform"]["chboxTerm"];
    var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    var result = true;
    var error_messages = document.createElement("ul");
    // error_messages.style.listStyle = "none";

    if (name == null || name == "") {
        var message = "Name must be filled out";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;
    }
    else if(name.length < 5) {
        var message = "Name must contain at least 5 letters";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;
    }

    if (surname == null || surname == "") {
        var message = "Surname must be filled out";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;
    }
    else if(surname.length < 8) {
        var message = "Surname must contain at least 8 letters";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;

    }

    if (email == null || email == "") {
        var message = "Email address must be filled out";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;
    }
    else if (patt.test(email) != true ) {
        var message = "You have entered a wrong email format";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;

    }

    if (birthday == null || birthday == "") {
        var message = "Date of birth must be filled out";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;
    }

    if(!male.checked && !female.checked) {
        var message = "You must choose one gender";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;
    }

    if(!check.checked) {
        var message = "You must agree to the terms first";
        var text_node = document.createTextNode(message);
        var list_item = document.createElement("li");
        list_item.appendChild(text_node);
        error_messages.appendChild(list_item);
        result = false;
    }

    if(result == false) {
        var divElement = document.getElementById("error");
        divElement.innerHTML = "";
        divElement.appendChild(error_messages);
        divElement.style.display = "block";
    }
    else alert("We have received your membership signup. Thank You.");
    return result;
}

function validateSurname() {
    var surname_span = document.getElementsByClassName("inputLName")[0];
    var surname = document.forms["membersignupform"]["inputLName"].value;
    if (surname == null || surname == "") {
        var message = "* Please enter your last name"
        surname_span.innerHTML = message;
    }
    else if (surname.length < 8) {
        var message = "* Last name at least 8 letters"
        surname_span.innerHTML = message;
    }
    else {
        return surname_span.innerHTML = null;
    }
}

function validateName() {
    var name_span = document.getElementsByClassName("inputFName")[0];
    var name = document.forms["membersignupform"]["inputFName"].value;
    if (name == null || name == "") {
        var message = "* Please enter your first name."
        name_span.innerHTML = message;
    }
    else if (name.length < 5) {
        var message = "* Last name at least 5 letters"
        name_span.innerHTML = message;
    }
    else {
        return name_span.innerHTML = null;
    }
}

function validateEmail() {
    var email_span = document.getElementsByClassName("inputEmail")[0];
    var email = document.forms["membersignupform"]["inputEmail"].value;
    var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    if (patt.test(email) != true ) {
        var message = "* Wrong email address"
        email_span.innerHTML = message;
    }
    else {
        email_span.innerHTML = null;
    }
}