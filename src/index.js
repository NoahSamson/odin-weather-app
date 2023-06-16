import "./style.css";
import * as API_FUNCTIONS from "./js/apiFunctions.js";
import * as RENDER_FUNCTIONS from "./js/domFunctions.js";

// Search City
// Search Input
const searchInput = document.getElementById("left-city-search");
// Search Icon
const searchIcon = document.getElementById("left-city-search-icon");
// Switch Units value button
const switchUnits = document.getElementById("left-change-units");

// Flags
let lastCityName;
let units = "metric";

// Get Weather Data to populate the page
async function getWeatherData(cityName, units) {
  // Get Weather Data
  try {
    RENDER_FUNCTIONS.loadingScreen(true);
    const weatherData = await API_FUNCTIONS.getData(cityName, units);
    lastCityName = cityName;

    RENDER_FUNCTIONS.loadingScreen(false);
    console.log(units);
    RENDER_FUNCTIONS.renderLocations(weatherData);
    RENDER_FUNCTIONS.renderWeather(weatherData);
    RENDER_FUNCTIONS.renderForecast(weatherData);
  } catch (error) {
    console.log("Error fetching weather data: ", error);
    throw error;
  }
}

// handle city search
async function handleSearch() {
  let cityName = searchInput.value;

  if (cityName) {
    try {
      await getWeatherData(cityName, units);
    } catch (error) {
      console.log("Error handling Search: ", error);
    }
  }
  searchInput.value = '';
}

// Search on Enter key press
searchInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    await handleSearch();
  }
});

// Search on click on search icon
searchIcon.addEventListener("click", async () => {
  await handleSearch();
});

// inital Loading Weather Data
getWeatherData("London", units);

// Event Listeners
switchUnits.addEventListener("click", () => {
  if (units === "metric") {
    switchUnits.innerHTML = "Display C";
    units = "imperial";
  } else {
    switchUnits.innerHTML = "Display F";
    units = "metric";
  }

  getWeatherData(lastCityName, units);
});
