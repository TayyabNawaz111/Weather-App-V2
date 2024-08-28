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

  function getBackgroundClass(temp) {
    if (temp < 0) return "bg-gradient-to-r from-blue-400 to-blue-700";
    if (temp >= 0 && temp < 15)
      return "bg-gradient-to-r from-teal-400 to-teal-600";
    if (temp >= 15 && temp < 25)
      return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    if (temp >= 25) return "bg-gradient-to-r from-red-400 to-red-700";
    return "bg-gray-500";
  }

  // Convert wind speed from m/s to km/h
  const windSpeedKmH = weatherData ? (weatherData.wind.speed * 3.6).toFixed(1) : null;

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-2xl ${
        weatherData ? getBackgroundClass(weatherData.main.temp) : "bg-gray-500"
      }`}
      style={{ minHeight: "300px", maxWidth: "300px" }}
    >
      {error && <p className="text-red-300 text-center mb-4">{error}</p>}
      {weatherData ? (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">{weatherData.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="w-24 h-24 mb-4"
          />
          <div className="text-lg font-bold text-center mb-4">
            {weatherData.weather[0].description}
          </div>
          <div className="text-center mb-4 space-y-2">
            <p className="text-lg font-medium">
              <span className="font-bold">Temperature:</span>
              {Math.ceil(weatherData.main.temp)}°C
            </p>
            <p className="text-lg font-medium">
              <span className="font-bold">Feels Like:</span>
              {Math.ceil(weatherData.main.feels_like)}°C
            </p>
            <p className="text-lg font-medium">
              <span className="font-bold">Min/Max: </span>
              <span className="text-gray-300">
                {Math.ceil(weatherData.main.temp_min)}°C -
                {Math.ceil(weatherData.main.temp_max)}°C
              </span>
            </p>
            <p className="text-lg font-medium">
              <span className="font-bold">Humidity:</span>
              {weatherData.main.humidity}%
            </p>
            <p className="text-lg font-medium">
              <span className="font-bold">Wind Speed:</span>
              {windSpeedKmH} km/h
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default CityWeather;
