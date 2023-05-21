function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }

    // Display output if email is valid
    const outputTextarea = document.getElementById("output");
    outputTextarea.value = "Email submitted: " + email;

    return true;
}