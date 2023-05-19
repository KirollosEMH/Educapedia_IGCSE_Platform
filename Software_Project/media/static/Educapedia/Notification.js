// Function to send an email to the user if he forgets his password
document.getElementById("Forget").onclick = function () {
    var forgetInput = document.getElementById("email").value; // Getting the email from the user
    var emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // Regular expression for email validation

    // Checking if the email is empty or not
    if (forgetInput === "" || !emailFormat.test(forgetInput)) {
        window.alert("Please enter a Valid Email Address.");
    } else {
        window.alert("An Email has been sent to " + forgetInput);
    }
}