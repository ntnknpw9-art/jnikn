import React from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ forecast, unit }) => {
  const getMaxMinTemp = (day) => {
    const temps = day.hour.map(h => unit === 'metric' ? h.temp_c : h.temp_f);
    return {
      max: Math.round(Math.max(...temps)),
      min: Math.round(Math.min(...temps)),
    };
  };

  return (
    <div className="weather-forecast">
      <h3>7-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map((day, index) => {
          const temps = getMaxMinTemp(day);
          const date = new Date(day.date);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          const monthDay = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          });

          return (
            <div key={index} className="forecast-card">
              <div className="forecast-date">
                <div className="day-name">{dayName}</div>
                <div className="month-day">{monthDay}</div>
              </div>

              <img
                src={`https:${day.day.condition.icon}`}
                alt={day.day.condition.text}
                className="forecast-icon"
              />

              <div className="forecast-condition">
                {day.day.condition.text}
              </div>

              <div className="forecast-temps">
                <div className="temp-max">{temps.max}°</div>
                <div className="temp-min">{temps.min}°</div>
              </div>

              <div className="forecast-details">
                <div className="forecast-detail">
                  <span className="icon">💧</span>
                  <span>{day.day.daily_chance_of_rain}%</span>
                </div>
                <div className="forecast-detail">
                  <span className="icon">💨</span>
                  <span>{Math.round(unit === 'metric' ? day.day.maxwind_kph : day.day.maxwind_mph)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;
