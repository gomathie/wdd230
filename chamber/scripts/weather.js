// Weather for the chamber website
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastElement = document.querySelector('#forecast');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.53&lon=0.42&units=imperial&appid=9057c79afc9495bd0a195b55bee48749';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=5.53&lon=0.42&units=imperial&appid=9057c79afc9495bd0a195b55bee48749';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${parseInt(data.main.temp.toFixed(0))}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc} `;
}

apiFetch();

// Fetch 3-day forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display 3-day forecast
function displayForecast(data) {
    // Group forecast data by day
    const dailyForecasts = {};

    // Process the 3-hour forecast data to get daily averages
    data.list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

        if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
                temps: [],
                icons: [],
                descriptions: []
            };
        }

        dailyForecasts[date].temps.push(forecast.main.temp);
        dailyForecasts[date].icons.push(forecast.weather[0].icon);
        dailyForecasts[date].descriptions.push(forecast.weather[0].description);
    });

    // Create forecast HTML
    let forecastHTML = '';
    forecastDays.forEach(day => {
        // Calculate average temperature for the day
        const avgTemp = dailyForecasts[day].temps.reduce((sum, temp) => sum + temp, 0) / dailyForecasts[day].temps.length;

        // Get most common description
        const descriptions = dailyForecasts[day].descriptions;
        const descriptionCounts = {};
        let maxCount = 0;
        let mostCommonDescription = "";

        descriptions.forEach(desc => {
            descriptionCounts[desc] = (descriptionCounts[desc] || 0) + 1;
            if (descriptionCounts[desc] > maxCount) {
                maxCount = descriptionCounts[desc];
                mostCommonDescription = desc;
            }
        });

        forecastHTML += `${day}: ${Math.round(avgTemp)}°F (${mostCommonDescription}), `;
    });

    // Remove trailing comma and space
    forecastHTML = forecastHTML.slice(0, -2);

    forecastElement.innerHTML = forecastHTML;
}

fetchForecast();