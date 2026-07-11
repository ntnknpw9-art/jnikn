# Weather Dashboard

A modern, responsive weather dashboard built with React and Framer Motion.

## Features

🌤️ **Current Weather** - Real-time weather conditions
📅 **7-Day Forecast** - Extended weather predictions
🔍 **City Search** - Search with autocomplete suggestions
🌡️ **Temperature Units** - Toggle between Celsius and Fahrenheit
📊 **Detailed Information** - UV Index, Humidity, Wind, Pressure, and more
📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✨ **Beautiful UI** - Modern gradient design with smooth animations

## Tech Stack

- React 18
- CSS3 with Flexbox and Grid
- WeatherAPI.com
- Modern ES6+ JavaScript

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Get a free API key from https://www.weatherapi.com/
4. Create `.env` file with `REACT_APP_WEATHER_API_KEY=your_key`
5. Run: `npm start`

## File Structure

```
src/
├── components/
│   ├── WeatherDashboard.js      # Main component
│   ├── SearchCity.js             # City search component
│   ├── CurrentWeather.js          # Current weather display
│   ├── WeatherDetails.js          # Detailed info component
│   ├── WeatherForecast.js         # Forecast component
│   └── *.css                      # Component styles
├── App.js                         # Main App component
├── App.css                        # App styles
└── index.js                       # Entry point
```

## API Reference

Using WeatherAPI.com:
- Current weather endpoint: `/v1/current.json`
- Forecast endpoint: `/v1/forecast.json`
- Includes: Temperature, conditions, wind, humidity, UV index, AQI, and more

## Screenshots

- Clean, modern dashboard layout
- Interactive city search with suggestions
- Detailed weather information cards
- 7-day forecast grid
- Responsive mobile design

## Future Enhancements

- [ ] Weather alerts
- [ ] Hourly forecast
- [ ] Historical weather data
- [ ] Map integration
- [ ] Air quality monitoring
- [ ] Multiple city comparison
- [ ] Dark/Light theme toggle
- [ ] Geolocation support

## License

MIT License - feel free to use for personal and commercial projects

## Support

For issues or questions, please open an issue on GitHub.
