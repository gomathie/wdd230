document.addEventListener("DOMContentLoaded", function () {
    const tempElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");

    if (tempElement && windSpeedElement && windChillElement) {
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);

        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.innerText = windChill
            ? `${windChill.toFixed(2)}°F`
            : "N/A";
    }
});

function calculateWindChill(temp, windSpeed) {
    let windChillFormula =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16);
    if (temp <= 50 && windSpeed > 3.0) {
        return windChillFormula;
    } else {
        return null;
    }
}
