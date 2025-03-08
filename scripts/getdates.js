
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = `${currentYear}`;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//Main form - Week 8 form assignment

document.getElementById("userForm").addEventListener("submit", function (event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");

    if (password !== confirmPassword) {
        event.preventDefault();
        passwordError.textContent = "Passwords do not match!";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    } else {
        passwordError.textContent = "";
    }
});