

document.addEventListener('DOMContentLoaded', function () {

    const apiKey = '9057c79afc9495bd0a195b55bee48749';
    const city = 'Cozumel,mx'; // Cozumel, Mexico

    // Weather alert functionality
    const weatherAlert = document.getElementById('weather-alert');
    const closeAlert = document.getElementById('close-alert');

    if (closeAlert && weatherAlert) {
        closeAlert.addEventListener('click', function () {
            weatherAlert.style.display = 'none';
        });
    }

    // Function to fetch current weather
    async function fetchCurrentWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.4&lon=-86.9&units=imperial&appid=9057c79afc9495bd0a195b55bee48749`);
            const data = await response.json();

            // Update current weather display
            if (data) {
                displayCurrentWeather(data);
                displayTemperatureAlert(data);
            }
        } catch (error) {
            console.error('Error fetching current weather:', error);
            document.getElementById('current-temp').textContent = 'Unavailable';
            document.getElementById('current-humidity').textContent = 'Unavailable';
            document.getElementById('weather-condition').textContent = 'Unavailable';
            document.getElementById('weather-description').textContent = 'Unavailable';
        }
    }

    // Function to fetch forecast for tomorrow at 15:00
    async function fetchForecast() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=20.4&lon=-86.9&appid=9057c79afc9495bd0a195b55bee48749&units=imperial`);
            const data = await response.json();

            if (data && data.list) {
                // Get tomorrow's date
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const tomorrowStr = tomorrow.toISOString().split('T')[0];

                // Find forecast for tomorrow at approximately 15:00
                const forecast15 = data.list.find(item => {
                    const itemDate = item.dt_txt.split(' ')[0];
                    const itemTime = item.dt_txt.split(' ')[1];
                    return itemDate === tomorrowStr && itemTime.startsWith('15:');
                });

                if (forecast15) {
                    document.getElementById('forecast-temp').textContent = Math.round(forecast15.main.temp);
                } else {
                    document.getElementById('forecast-temp').textContent = 'Unavailable';
                }
            }
        } catch (error) {
            console.error('Error fetching forecast:', error);
            document.getElementById('forecast-temp').textContent = 'Unavailable';
        }
    }

    // Display current weather data
    function displayCurrentWeather(data) {
        document.getElementById('current-temp').textContent = Math.round(data.main.temp);
        document.getElementById('current-humidity').textContent = data.main.humidity;

        if (data.weather && data.weather.length > 0) {
            const weatherIconContainer = document.getElementById('weather-icon');
            weatherIconContainer.innerHTML = '';

            // Display all weather conditions (typically just one)
            data.weather.forEach(weather => {
                document.getElementById('weather-condition').textContent = weather.main;
                document.getElementById('weather-description').textContent = weather.description;

                // Create and append weather icon
                const iconImg = document.createElement('img');
                iconImg.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
                iconImg.alt = weather.description;
                weatherIconContainer.appendChild(iconImg);
            });
        }
    }

    // Display temperature alert
    function displayTemperatureAlert(data) {
        if (data.main && data.main.temp_max) {
            document.getElementById('temp-max').textContent = Math.round(data.main.temp_max);
        }
    }

    // Call the functions if we're on the homepage
    if (document.querySelector('.weather-section')) {
        fetchCurrentWeather();
        fetchForecast();
    }
});