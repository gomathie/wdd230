document.addEventListener("DOMContentLoaded", function () {
    // Range input and display update
    const rangeValue = document.getElementById("rangevalue");
    const range = document.getElementById("rating");

    function displayRatingValue() {
        rangeValue.textContent = range.value;
    }

    range.addEventListener("change", displayRatingValue);
    range.addEventListener("input", displayRatingValue);

    // Password confirmation validation
    const password1 = document.getElementById("password");
    const password2 = document.getElementById("confirmPassword");
    const message = document.getElementById("passwordError");

    function checkSame() {
        if (password1.value !== password2.value) {
            message.textContent = "❗ Passwords DO NOT MATCH!";
            message.style.visibility = "visible";
            password2.style.backgroundColor = "#fff0f3";
            password2.value = "";
            password2.focus();
        } else {
            message.textContent = "";
            message.style.visibility = "hidden";
            password2.style.backgroundColor = "#fff";
        }
    }

    password2.addEventListener("focusout", checkSame);

    // Form submission handling
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        // Logging form data (For debugging purposes)
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

        // Submit the form after validation
        if (!message.textContent) {
            form.submit();
        }
    });

    // Set Date of Submission when clicking "Rate This Page"
    const button = document.getElementById("rateButton");

    function setDateOfSubmission() {
        const dateTimeField = document.createElement("input");
        dateTimeField.type = "hidden";
        dateTimeField.name = "dateTime";
        dateTimeField.value = Date.now();
        form.appendChild(dateTimeField);
    }

    button.addEventListener("click", setDateOfSubmission);
});
