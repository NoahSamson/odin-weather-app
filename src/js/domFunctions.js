import * as UTILITY_FUNCTIONS from "./utility.js";

function renderLocations(location) {
  const cityText = document.getElementById("left-city-text");
  cityText.textContent = location.region;
}

function renderWeather(weather) {
  // Left side
  const weatherText = document.getElementById("left-weather-text");
  weatherText.textContent = weather.text;

  const cityText = document.getElementById("left-city-text");
  cityText.textContent = weather.name;

  const currentDate = document.getElementById("left-date");
  currentDate.textContent = UTILITY_FUNCTIONS.currentDateFormatted(
    weather.localTime
  );

  const currentTime = document.getElementById("left-time");
  currentTime.textContent = UTILITY_FUNCTIONS.currentTimeFormatted(
    weather.localTime
  );

  const currentTemp = document.getElementById("left-current-temp");
  currentTemp.textContent = weather.temp + weather.tempUnit;

  const weatherIcon = document.getElementById("left-weather-icon");
  weatherIcon.innerHTML = UTILITY_FUNCTIONS.getWeatherIcon(
    weather.code,
    weather.isDay
  );

  // Right Side
  const descText = document.querySelectorAll(".right-desc-text");
  const descValue = document.querySelectorAll(".right-desc-value");

  descText[0].textContent = "Feels Like";
  descValue[0].textContent = weather.feelsLike + weather.tempUnit;

  descText[1].textContent = "Humidity";
  descValue[1].textContent = weather.humidity + "%";

  descText[2].textContent = "Air Quality";
  descValue[2].textContent = UTILITY_FUNCTIONS.getAirQuality(
    weather.airQuality
  );

  descText[3].textContent = "Wind Speed";
  descValue[3].textContent = weather.windSpeed + weather.speedUnit;
}

function renderForecast(weather) {
  let forecastData = weather.forecastData;

  const cards = document.getElementById("bottom-container");

  cards.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("p");
    title.classList.add("forecast-title");
    title.textContent = UTILITY_FUNCTIONS.getDay(forecastData[i].date);

    const temp = document.createElement("p");
    temp.classList.add("forecast-temp");
    temp.textContent = forecastData[i].avgTemp + weather.tempUnit;

    const airQUalityDiv = document.createElement("div");
    airQUalityDiv.classList.add("forecast-max-temp");
    airQUalityDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>thermometer-high</title><path d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5H11A1 1 0 0 1 12 4Z" /></svg>
        <p>${forecastData[i].maxTemp + weather.tempUnit}</p>
        `;

    const weatherIcon = document.createElement("div");
    weatherIcon.classList.add("forecast-weatherIcon");
    weatherIcon.innerHTML = UTILITY_FUNCTIONS.getWeatherIcon(
      forecastData[i].code,
      weather.isDay
    );

    card.append(title, temp, airQUalityDiv, weatherIcon);
    cards.appendChild(card);
  }
}

function loadingScreen(show) {
  const overlay = document.querySelector(".overlay");
  console.log(overlay.style.display);
  if (show) {
    overlay.style.display = "flex";
  } else {
    console.log(overlay.style.display);
    overlay.style.display = "none";
  }
}

export { renderLocations, renderWeather, renderForecast, loadingScreen };
