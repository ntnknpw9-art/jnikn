import React, { useState, useEffect } from 'react';
import './WeatherDashboard.css';
import SearchCity from './components/SearchCity';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import WeatherDetails from './components/WeatherDetails';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'demo';
const BASE_URL = 'https://api.weatherapi.com/v1';

const WeatherDashboard = () => {
  const [city, setCity] = useState('Tel Aviv');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

  useEffect(() => {
    fetchWeatherData(city);
  }, [city, unit]);

  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      // Using weatherapi.com (free tier available)
      const currentUrl = `${BASE_URL}/current.json?key=${API_KEY}&q=${cityName}&aqi=yes`;
      const forecastUrl = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${cityName}&days=7&aqi=yes`;

      const [currentRes, forecastRes] = await Promise.all([
        fetch(currentUrl),
        fetch(forecastUrl),
      ]);

      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error('City not found or API error');
      }

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      setCurrentWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCitySearch = (searchCity) => {
    setCity(searchCity);
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="weather-dashboard">
      <div className="dashboard-header">
        <h1>🌤️ Weather Dashboard</h1>
        <button className="unit-toggle" onClick={toggleUnit}>
          °{unit === 'metric' ? 'C' : 'F'}
        </button>
      </div>

      <SearchCity onSearch={handleCitySearch} />

      {error && <div className="error-message">{error}</div>}

      {loading && <div className="loading">Loading weather data...</div>}

      {!loading && currentWeather && (
        <div className="dashboard-content">
          <CurrentWeather
            data={currentWeather}
            unit={unit}
          />
          <WeatherDetails
            data={currentWeather}
            unit={unit}
          />
          {forecast && (
            <WeatherForecast
              forecast={forecast.forecast.forecastday}
              unit={unit}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
