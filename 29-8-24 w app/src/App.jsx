import { useEffect, useState } from "react";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState({
    weather: [],
  });
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          getWeatherByCoordinates(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const getWeatherByCoordinates = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrentWeather(res);
        setCity(res.name); 
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const getWeather = () => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
      )
        .then((res) => res.json())
        .then((res) => {
          setCurrentWeather(res);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  const temp = Math.round(currentWeather?.main?.temp - 273.15);
  const feelsLike = Math.round(currentWeather?.main?.feels_like - 273.15);
  const weatherCondition = currentWeather?.weather
    ? currentWeather?.weather[0]?.main
    : "";

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="mb-8 text-4xl font-bold">Weather App</h1>
        <input
          type="text"
          value={city}
          placeholder="Enter city name"
          className="p-2 mb-4 border border-gray-300 rounded"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={getWeather}
          className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
        >
          Get Weather
        </button>
    
        {city && currentWeather.main && (
          <div className="p-6 mt-8 bg-white rounded shadow-md w-96">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Temperature</h1>
              <h1 className="text-lg font-semibold">{temp}°C</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Feels Like</h1>
              <h1 className="text-lg font-semibold">{feelsLike}°C</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Weather</h1>
              <h1 className="text-lg font-semibold">{weatherCondition}</h1>
            </div>
          </div>
        )}
      </div>
    );  
}

export default Weather;
