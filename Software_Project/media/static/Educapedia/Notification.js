document.getElementById("Forget").onclick = function () {
    var forgetInput = document.getElementById("email").value;
    var emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // Regular expression for email validation

    if (forgetInput === "" || !emailFormat.test(forgetInput)) {
        window.alert("Please enter a Valid Email Address.");
    } else {
        window.alert("An Email has been sent to " + forgetInput);
    }
}