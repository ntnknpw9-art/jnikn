import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ data, unit }) => {
  const weather = data.current;
  const location = data.location;

  const temp = unit === 'metric' ? weather.temp_c : weather.temp_f;
  const feelsLike = unit === 'metric' ? weather.feelslike_c : weather.feelslike_f;
  const windSpeed = unit === 'metric'
    ? weather.wind_kph + ' km/h'
    : weather.wind_mph + ' mph';

  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="location-info">
          <h2>{location.name}, {location.country}</h2>
          <p className="date">{new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</p>
        </div>

        <div className="weather-icon-section">
          <img
            src={`https:${weather.condition.icon}`}
            alt={weather.condition.text}
            className="weather-icon"
          />
        </div>

        <div className="temperature-section">
          <div className="main-temp">{Math.round(temp)}°</div>
          <div className="condition">{weather.condition.text}</div>
          <div className="feels-like">Feels like {Math.round(feelsLike)}°</div>
        </div>
      </div>

      <div className="quick-info">
        <div className="info-item">
          <span className="label">💧 Humidity</span>
          <span className="value">{weather.humidity}%</span>
        </div>
        <div className="info-item">
          <span className="label">💨 Wind</span>
          <span className="value">{windSpeed}</span>
        </div>
        <div className="info-item">
          <span className="label">🌡️ Pressure</span>
          <span className="value">{weather.pressure_mb} mb</span>
        </div>
        <div className="info-item">
          <span className="label">👁️ Visibility</span>
          <span className="value">{weather.vis_km} km</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
