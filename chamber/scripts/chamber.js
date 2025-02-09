document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
