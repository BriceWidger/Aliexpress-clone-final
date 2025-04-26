const pwVis_input = document.querySelector("#password-input-field-SIP");
const signInButton = document.querySelector("#sign-in-button-disabled-SIP");

signInButton.addEventListener("click", function () {
    const password = pwVis_input.value;
    if (password === "password123") {
        // Log in successful, you can add your own logic here
        console.log("Login successful!");
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        // Display a prompt with an error message
        alert("Incorrect password. Please try again.");
    }
});

pwVis_input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        signInButton.click();
    }
});

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// Password animation
function pwAnimate() {
    let x = document.getElementById("pw-indicator-SIP")
    x.style.marginTop = "-9px"
    x.style.transition = "0.2s"
    x.style.fontSize = "12px"
}

// Toggle eye icons with onClick
var on = "resources/images/visible-eye-icon.png";
var off = "resources/images/invisible-eye-icon.png";
var state = false;
var img = document.getElementById("invisible-eye-icon-SIP");
var pwVis = document.getElementById("password-input-field-SIP");
img.onclick = function () {
    if (state) {
        img.src = off;
        state = false;
    }
    else {
        img.src = on;
        state = true;
    }
    // Toggle password visibility
    if (pwVis.type === "password") {
        pwVis.type = "text";
    } else {
        pwVis.type = "password";
    }
}

// Onclick clears password, hides x-button, and disables "Sign in" button
function clearPW() {
    // Clears password
    document.getElementById("password-input-field-SIP").value = "";
    // Hides x-button
    document.getElementById("black-circle-transparent-x-logo-SIP").style.opacity = "0";
    document.getElementById("black-circle-transparent-x-logo-SIP").style.pointerEvents = "none";
    // Changes "Sign in" button to "disabled" styles
    document.getElementById("sign-in-button-disabled-SIP").style.color = "rgb(255, 255, 255)";
    document.getElementById("sign-in-button-disabled-SIP").style.background = "rgb(255, 181, 187)";
    document.getElementById("sign-in-button-disabled-SIP").style.margin = "16px 0px 8px";
    document.getElementById("sign-in-button-disabled-SIP").style.border = "0px solid rgb(0, 0, 0)";
    document.getElementById("sign-in-button-disabled-SIP").style.cursor = "not-allowed";
    return false;

}

// Keydown event that displays x-button and changes "Sign in" button to "enabled" styles + Mouseover event changing opacity of x-button
document.body.addEventListener("keydown", function (event) {
    // Displays x-button and changes "Sign in" button to "enabled" styles 
    // NOTE: event.target is used to ensure both X-button and "Sign in" button is not displayed unless text is written inside password input field; else, x-button/"Sign in" button will be displayed by typing anywhere
    if (event.target.matches("#password-input-field-SIP")) {
        document.getElementById("black-circle-transparent-x-logo-SIP").style.opacity = "0.5";
        document.getElementById("black-circle-transparent-x-logo-SIP").style.display = "block";
        document.getElementById("black-circle-transparent-x-logo-SIP").style.pointerEvents = "auto";
        // Changes "Sign in" button to "enabled" styles
        document.getElementById("sign-in-button-disabled-SIP").style.background = "rgb(211, 3, 28)";
        document.getElementById("sign-in-button-disabled-SIP").style.cursor = "pointer";
    }
    // Mouseover event simulating hover effect that changes x-button opacity
    var img = document.getElementById("black-circle-transparent-x-logo-SIP");
    img.addEventListener("mouseover", function () {
        img.style.opacity = 1;
    });
});