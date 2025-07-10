// Element Gathering
const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const degree = document.querySelector('.degrees');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherMain = document.querySelector('.weather-main');
const weatherDesc = document.querySelector('.weather-descripton');
const weatherIcon = document.querySelector('.weather-icon');

// Icons 
const iconMap = {
  Clear: 'fa-sun',
  Clouds: 'fa-cloud',
  Rain: 'fa-cloud-showers-heavy',
  Drizzle: 'fa-cloud-rain',
  Thunderstorm: 'fa-bolt',
  Snow: 'fa-snowflake',
  Mist: 'fa-smog',
  Haze: 'fa-smog'
};

// Gathering city name

searchButton.addEventListener('click', () => {
    const input = inputField.value;
    const apiKey = 'f049f79060791e0670092dad5957a631';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        cityName.textContent = data.name;
        degree.textContent = `${data.main.temp}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind: ${data.wind.speed} mph`;
        weatherMain.textContent = data.weather[0].main;
        weatherDesc.textContent = data.weather[0].description;
        const condition = data.weather[0].main;
        const iconClass = iconMap[condition] || 'fa-question'; 
        weatherIcon.className = `weather-icon fa-solid ${iconClass}`;
    })
    .catch(error => {
        console.log('Error:', error); // In case something goes wrong
    });
})