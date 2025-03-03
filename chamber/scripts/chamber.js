document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


// windchill.js

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if the values are within the valid range
    if (temperature <= 50 && windSpeed > 3.0) {
        // Wind Chill formula
        let windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1);  // Round to 1 decimal place
    } else {
        return "N/A";  // Return N/A if conditions are not met
    }
}

// Function to extract values and display wind chill
function updateWindChill() {
    // Get the temperature and wind speed from the page
    const temperature = parseFloat(document.getElementById('temperature').innerText);
    const windSpeed = parseFloat(document.getElementById('windspeed').innerText);

    // Calculate the wind chill
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the wind chill value on the page
    document.getElementById('windchill').innerText = windChill;
}

// Call the function when the page loads
window.onload = updateWindChill;


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


