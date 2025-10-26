const API_BASE_URL = 'http://localhost:8080/api/weather';
let useCelsius = true;

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const loader = document.getElementById('loader');
  const weatherResultDiv = document.getElementById('weatherResult');
  const errorMessageDiv = document.getElementById('errorMessage');

  weatherResultDiv.innerHTML = '';
  errorMessageDiv.innerHTML = '';

  if (!city) {
    errorMessageDiv.innerHTML = '⚠️ Please enter a city name.';
    return;
  }

  loader.style.display = 'block';

  try {
    const response = await fetch(`${API_BASE_URL}?city=${encodeURIComponent(city)}`);
    loader.style.display = 'none';

    if (!response.ok) {
      throw new Error(response.status === 404
        ? 'City not found. Please check the spelling.'
        : `Error: ${response.statusText}`);
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    loader.style.display = 'none';
    errorMessageDiv.innerHTML = `❌ Failed to fetch weather: ${error.message}`;
    console.error('Error fetching weather:', error);
  }
}

function displayWeather(data) {
  const weatherResultDiv = document.getElementById('weatherResult');

  const weatherMain = data.weather[0].main;
  const weatherDesc = data.weather[0].description;
  const description =
    weatherMain.toLowerCase() === weatherDesc.toLowerCase()
      ? weatherMain
      : `${weatherMain} - ${weatherDesc}`;

  const temp = formatTemp(data.main.temp);
  const feelsLike = formatTemp(data.main.feels_like);
  const minTemp = formatTemp(data.main.temp_min);
  const maxTemp = formatTemp(data.main.temp_max);

  setBackground(weatherMain.toLowerCase());

  weatherResultDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>${description}</p>
    <p>🌡 Temperature: ${temp} (Feels like: ${feelsLike})</p>
    <p>📉 Min: ${minTemp} / 📈 Max: ${maxTemp}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>💨 Wind: ${data.wind.speed} m/s</p>
    <p>📊 Pressure: ${data.main.pressure} hPa</p>
  `;
}

function formatTemp(tempC) {
  return useCelsius
    ? `${tempC.toFixed(1)} °C`
    : `${(tempC * 9 / 5 + 32).toFixed(1)} °F`;
}

function toggleUnits() {
  useCelsius = !useCelsius;
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    getWeather();
  }
}

function setBackground(weather) {
  let imgUrl = "";

  if (weather.includes("rain")) {
    imgUrl = "https://tse1.mm.bing.net/th/id/OIP.uTRxyDECsATN2PI-2a0XuQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3";
  } else if (weather.includes("snow") || weather.includes("winter")) {
    imgUrl = "https://tse1.mm.bing.net/th/id/OIP.FDt_CU571nU763aZKdV1XwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3";
  } else if (weather.includes("clear")) {
    imgUrl = "https://tse3.mm.bing.net/th/id/OIP.e1Dij42QESa1S5O1guiEzgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3";
  } else if (weather.includes("cloud")) {
    imgUrl = "https://images.pexels.com/photos/821944/pexels-photo-821944.jpeg?cs=srgb&dl=cloudiness-clouds-cloudy-sky-821944.jpg&fm=jpg";
  } else if (weather.includes("mist") || weather.includes("fog")) {
    imgUrl = "https://wallup.net/wp-content/uploads/2015/12/152759-lake-forest-nature-sunset-mist-landscape.jpg";
  } else {
    imgUrl = "https://i.pinimg.com/originals/8f/05/9e/8f059e2e1eb1b7d28355da095b7c1686.jpg";
  }

  document.body.style.backgroundImage = `url('${imgUrl}')`;
}
