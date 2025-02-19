// Wait until the webpage is fully loaded before running the script below 
document.addEventListener("DOMContentLoaded", function () {

    // Function to calculate wind chill
    function calculateWindChill(temperature, windSpeed) {
        // Check if conditions meet the wind chill formula requirements return Wind chill is not applicable

        if (temperature > 50 || windSpeed <= 3.0) {
            return "N/A";
        }

        // Applying the windchill formula
        let windChill = 35.74 + (0.6215 * temperature)
            - (35.75 * Math.pow(windSpeed, 0.16))
            + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

        // Return the wind chill rounded to 2 decimal places with °F
        return windChill.toFixed(2) + "°F";
    }

    // Select the HTML elements that display temperature, wind speed, and wind chill
    let tempElement = document.getElementById("temperature"); // Temperature span
    let windElement = document.getElementById("windSpeed"); // Wind speed span
    let windChillElement = document.getElementById("windChill"); // Wind chill span

    // Check if all required elements exist in the HTML
    if (tempElement && windElement && windChillElement) {
        // Get the temperature and wind speed values from the page
        let temperature = parseFloat(tempElement.textContent); // Convert to a number
        let windSpeed = parseFloat(windElement.textContent); // Convert to a number

        // Calculate wind chill and display the result in the HTML
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    }
});

