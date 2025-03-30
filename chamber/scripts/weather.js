const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastElement = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.53&lon=0.42&units=imperial&appid=9057c79afc9495bd0a195b55bee48749';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.53&lon=0.42&appid=9057c79afc9495bd0a195b55bee48749&units=imperial';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
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
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

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
        forecastElement.textContent = "Forecast unavailable";
    }
}

function displayForecast(data) {
    if (!data.list) {
        forecastElement.textContent = "Forecast data unavailable";
        return;
    }

    const dailyForecasts = {};

    data.list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

        if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
                temps: [],
                descriptions: []
            };
        }

        dailyForecasts[date].temps.push(forecast.main.temp);
        dailyForecasts[date].descriptions.push(forecast.weather[0].description);
    });

    const days = Object.keys(dailyForecasts).slice(0, 3);

    let forecastHTML = '';

    days.forEach(day => {
        const temps = dailyForecasts[day].temps;
        const avgTemp = Math.round(temps.reduce((sum, temp) => sum + temp, 0) / temps.length);
        const description = dailyForecasts[day].descriptions[0];

        forecastHTML += `<div class="forecast-day">${day}: ${avgTemp}°F (${description})</div>`;
    });

    if (forecastHTML) {
        forecastElement.innerHTML = forecastHTML;
    } else {
        forecastElement.innerHTML = "<div class='forecast-day'>No forecast data available</div>";
    }
}




apiFetch();
fetchForecast();