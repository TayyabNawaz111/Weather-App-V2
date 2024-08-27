import React, { useEffect, useState } from "react";

function CityWeather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8836c24544aebfcbb61ba4b064f23d9e&units=metric`
        );
        if (!res.ok) {
          throw new Error("Response was not ok!");
        }
        const data = await res.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error("Fetch error: ", error);
        setError(
          "Failed to fetch weather data. Please check the city's spelling and try again."
        );
        setWeatherData(null);
      }
    }

    fetchWeatherData();
  }, [city]); 

  return (
    <div>
      {error && <p>{error}</p>}
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CityWeather;
