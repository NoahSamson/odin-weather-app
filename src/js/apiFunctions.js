async function getData(cityName, units) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=83686476d69d4386b59102752231206&q=${cityName}&days=7&aqi=yes&alerts=no`
    );

    const data = await response.json();

    let weatherData = {
      name: data.location.name,
      // region: data.location.region,
      // country: data.location.country,
      // timezone: data.location.tz_id,
      localTime: data.location.localtime,
      code: data.current.condition.code,
      text: data.current.condition.text,
      isDay: data.current.is_day,
      humidity: data.current.humidity,
      // cloud: data.current.cloud,
      // uv: data.current.uv,
      airQuality: data.current.air_quality["us-epa-index"],
      // windDegree: data.current.wind_degree,
      // windDir: data.current.wind_dir,
      // forecast: data.forecast.forecastday,
    };

    if (units === "metric") {
      weatherData["feelsLike"] = data.current.feelslike_c;
      // weatherData["Gust"] = data.current.gust_kph;
      // weatherData["precip"] = data.current.precip_mm;
      // weatherData["pressure"] = data.current.pressure_mb;
      weatherData["temp"] = data.current.temp_c;
      // weatherData["vis"] = data.current.vis_km;
      weatherData["windSpeed"] = data.current.wind_kph;
      weatherData["tempUnit"] = " °C";
      weatherData["speedUnit"] = " km/h";

      const newForecastArray = [];

      data.forecast.forecastday.forEach((eachDay) => {
        console.log(eachDay.day.avgtemp_c);
        const dayForecast = {
          date: eachDay.date,
          avgTemp: eachDay.day.avgtemp_c,
          code: eachDay.day.condition.code,
          maxTemp: eachDay.day.maxtemp_c,
          // airQuality: eachDay.day.air_quality["us-epa-index"],
        };

        newForecastArray.push(dayForecast);
      });

      weatherData["forecastData"] = newForecastArray;
    } else {
      weatherData["feelsLike"] = data.current.feelslike_f;
      // weatherData["Gust"] = data.current.gust_mph;
      // weatherData["precip"] = data.current.precip_in;
      // weatherData["pressure"] = data.current.pressure_in;
      weatherData["temp"] = data.current.temp_f;
      // weatherData["vis"] = data.current.vis_miles;
      weatherData["windSpeed"] = data.current.wind_mph;
      weatherData["tempUnit"] = " °F";
      weatherData["speedUnit"] = " mph";

      const newForecastArray = [];

      data.forecast.forecastday.forEach((eachDay) => {
        console.log(eachDay.day.avgtemp_c);
        const dayForecast = {
          date: eachDay.date,
          avgTemp: eachDay.day.avgtemp_c,
          code: eachDay.day.condition.code,
          maxTemp: eachDay.day.maxtemp_f,
          // airQuality: eachDay.day.air_quality["us-epa-index"],
        };

        newForecastArray.push(dayForecast);
      });

      weatherData["forecastData"] = newForecastArray;
    }
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}

async function getData2(cityName, units) {
  try {
    const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=20f7632ffc2c022654e4093c6947b4f4`
      `https://api.weatherapi.com/v1/current.json?key=83686476d69d4386b59102752231206&q=${cityName}`
    );
    const data = await response.json();

    let weatherData = {
      country: data.location.country,
      name: data.location.name,
      region: data.location.region,
      timezone: data.location.tz_id,
      localTime: data.location.localtime,
    };

    if (units === "metric") {
      weatherData["code"] = data.current.condition.code;
      weatherData["text"] = data.current.condition.text;
      weatherData["feelsLike"] = data.current.feelslike_c;
      weatherData["Gust"] = data.current.gust_kph;
      weatherData["humidity"] = data.current.humidity;
      weatherData["isDay"] = data.current.is_day;
      weatherData["precip"] = data.current.precip_mm;
      weatherData["pressure"] = data.current.pressure_mb;
      weatherData["temp"] = data.current.temp_c;
      weatherData["uv"] = data.current.uv;
      weatherData["vis"] = data.current.vis_km;
      weatherData["windDegree"] = data.current.wind_degree;
      weatherData["windDir"] = data.current.wind_dir;
      weatherData["windSpeed"] = data.current.wind_kph;
    } else {
      weatherData["code"] = data.current.condition.code;
      weatherData["text"] = data.current.condition.text;
      weatherData["feelsLike"] = data.current.feelslike_f;
      weatherData["Gust"] = data.current.gust_mph;
      weatherData["humidity"] = data.current.humidity;
      weatherData["isDay"] = data.current.is_day;
      weatherData["precip"] = data.current.precip_in;
      weatherData["pressure"] = data.current.pressure_in;
      weatherData["temp"] = data.current.temp_f;
      weatherData["uv"] = data.current.uv;
      weatherData["vis"] = data.current.vis_miles;
      weatherData["windDegree"] = data.current.wind_degree;
      weatherData["windDir"] = data.current.wind_dir;
      weatherData["windSpeed"] = data.current.wind_mph;
    }

    console.log(weatherData.country);
    console.log(weatherData.localTime);
    console.log(weatherData.code);
    console.log(data);
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}

export { getData };
