import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ data, unit }) => {
  const weather = data.current;
  const location = data.location;

  const uvIndex = weather.uv;
  const cloudCover = weather.cloud;
  const gustSpeed = unit === 'metric' ? weather.gust_kph : weather.gust_mph;
  const visibility = unit === 'metric' ? weather.vis_km : weather.vis_miles;
  const dewPoint = unit === 'metric' ? weather.dewpoint_c : weather.dewpoint_f;

  const getUVLevel = (uv) => {
    if (uv < 3) return { level: 'Low', color: 'green' };
    if (uv < 6) return { level: 'Moderate', color: 'yellow' };
    if (uv < 8) return { level: 'High', color: 'orange' };
    if (uv < 11) return { level: 'Very High', color: 'red' };
    return { level: 'Extreme', color: 'purple' };
  };

  const uvLevel = getUVLevel(uvIndex);

  return (
    <div className="weather-details">
      <h3>Detailed Information</h3>
      <div className="details-grid">
        <div className="detail-card">
          <div className="detail-header">☀️ UV Index</div>
          <div className="detail-value">{uvIndex}</div>
          <div className={`detail-status ${uvLevel.color}`}>{uvLevel.level}</div>
        </div>

        <div className="detail-card">
          <div className="detail-header">☁️ Cloud Cover</div>
          <div className="detail-value">{cloudCover}%</div>
          <div className="detail-progress">
            <div
              className="progress-bar"
              style={{ width: `${cloudCover}%` }}
            ></div>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-header">💨 Wind Gust</div>
          <div className="detail-value">{Math.round(gustSpeed)}</div>
          <div className="detail-unit">{unit === 'metric' ? 'km/h' : 'mph'}</div>
        </div>

        <div className="detail-card">
          <div className="detail-header">🌍 Coordinates</div>
          <div className="detail-value">
            {location.lat.toFixed(2)}°N, {location.lon.toFixed(2)}°E
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-header">💧 Dew Point</div>
          <div className="detail-value">{Math.round(dewPoint)}°</div>
        </div>

        <div className="detail-card">
          <div className="detail-header">⏰ Local Time</div>
          <div className="detail-value">
            {new Date(location.localtime).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
