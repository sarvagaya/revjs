function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let errorName = document.getElementById("nameError");
    let displayInfo = document.getElementById("displayInfo");
    errorName.style.fontSize = "10px"
    errorName.style.color = "red"
    let errorEmail = document.getElementById("emailError");
    let errorMobile = document.getElementById("mobileError");
    errorMobile.style.fontSize = "10px";
    errorMobile.style.color = "red";
    if (name.length === 0) {
        errorName.innerHTML = "*Name cannot be empty"
    } else if (name.length < 2) {
        errorName.innerHTML = "*Name must be atleast 2 characters"
    } else {
        errorName.innerHTML = ""
    }
    if (mobile.length < 10) {
        errorMobile.innerHTML = "Invalid mobile number"
    } else if (mobile.length > 10) {
        errorMobile.innerHTML = "Please provide a valid number"
    } else {
        errorMobile.innerHTML = ""
    }
    if(name.length > 2 && mobile.length === 10 && email.length > 10) {
        displaying(name, email, mobile)
    } else {
        alert("Invalid name, email or mobile")
    }
}

function displaying(name, email, mobile) {
    let displayName = document.getElementById("displayName");
    let displayEmail = document.getElementById("displayEmail");
    let displayMobile = document.getElementById("displayMobile");
    displayName.innerHTML = name;
    displayEmail.innerHTML = email;
    displayMobile.innerHTML = mobile;
}

document.getElementById("register").addEventListener("click", register);