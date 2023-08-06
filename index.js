function getWeather() {
    const apiKey = '3ed20a1db11309509198af72f90eaa9e';
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === 200) {
                displayWeatherInfo(data);
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherInfo(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.style.display = 'block';
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp;
    document.getElementById('weatherDescription').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('windSpeed').textContent = data.wind.speed;
}

document.getElementById('cityInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
