import React, { useState } from "react";
import Search from "./Components/Search"; 
import Display from "./Components/Display"; 

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setError(null); 
      setWeatherData(null); 

      // Geocoding API to get lat/lon for a city
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude } = geoData.results[0];

      // Fetch weather data using lat/lon
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();

      setWeatherData({
        city,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
      });
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err.message || "Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div>
      <Search onSearch={fetchWeather} />
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <Display weatherData={weatherData} />
    </div>
  );
};

export default App;
