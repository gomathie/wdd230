document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburger-button");
    const navMenu = document.querySelector(".menu");

    if (!hamburgerButton || !navMenu) {
        console.error("No menu not found! Check your HTML.");
        return;
    }

    hamburgerButton.addEventListener("click", function () {
        navMenu.classList.toggle("open");

        // Change icon when menu opens/closes
        if (navMenu.classList.contains("open")) {
            hamburgerButton.textContent = "❌";
        } else {
            hamburgerButton.textContent = "☰";
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && event.target !== hamburgerButton) {
            navMenu.classList.remove("open");
            hamburgerButton.textContent = "☰";
        }
    });

    // Close menu when clicking a menu link
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("open");
            hamburgerButton.textContent = "☰";
        });
    });
});


// Last visit time Using localStorage to store the latest visit date by the client, 
// display one of three possible messages about the time between page visits in the sidebar content area.

document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = new Date().getTime();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const previousVisitTime = parseInt(lastVisit, 10);
        const timeDifference = currentVisit - previousVisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentVisit);
});



//Display local time
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Formats the time based on the user's locale
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();


