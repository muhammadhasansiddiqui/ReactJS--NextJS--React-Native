import { useEffect, useState } from 'react';
import './index.css';

function Weather() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      getWeather();
    }
  }, [city]);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrentWeather(res);
        console.log("🚀 ~ .then ~ res:", res);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const temp = currentWeather.main?.temp - 273.15;
  const feels_like = currentWeather.main?.feels_like - 273.15;
  const temp_min = currentWeather.main?.temp_min - 273.15;
  const temp_max = currentWeather.main?.temp_max - 273.15;
  const pressure = currentWeather.main?.pressure;
  const humidity = currentWeather.main?.humidity;
  const sea_level = currentWeather.main?.sea_level;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        className="p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={getWeather}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Get Weather
      </button>
      {city && (
        <div className="mt-8 bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Current Weather in {city}</h2>
          <p className="mb-2">Temperature: {temp?.toFixed(2)}°C</p>
          <p className="mb-2">Feels Like: {feels_like?.toFixed(2)}°C</p>
          <p className="mb-2">Minimum Temperature: {temp_min?.toFixed(2)}°C</p>
          <p className="mb-2">Maximum Temperature: {temp_max?.toFixed(2)}°C</p>
          <p className="mb-2">Pressure: {pressure} hPa</p>
          <p className="mb-2">Humidity: {humidity}%</p>
          <p className="mb-2">Sea Level: {sea_level} hPa</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
