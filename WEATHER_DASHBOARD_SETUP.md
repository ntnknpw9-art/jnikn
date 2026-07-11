# Weather Dashboard Setup

## Environment Variables

Create a `.env` file in the root directory with the following:

```env
REACT_APP_WEATHER_API_KEY=your_weatherapi_key_here
```

## Getting Weather API Key

### Option 1: WeatherAPI.com (Recommended)
1. Go to https://www.weatherapi.com/
2. Sign up for a free account
3. Copy your API key
4. Add it to `.env` file

### Option 2: OpenWeatherMap
1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Get your API key
4. Modify the code in `WeatherDashboard.js` to use OpenWeatherMap API

## Free Tier Limits

- WeatherAPI: 1M calls/month (free tier)
- OpenWeatherMap: 60 calls/minute (free tier)

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

## Features

✅ Current weather with detailed information
✅ 7-day weather forecast
✅ Search by city with autocomplete suggestions
✅ Temperature unit toggle (°C / °F)
✅ UV index, humidity, wind speed, and more
✅ Responsive design
✅ Beautiful gradient UI

## API Data Includes

- Current temperature and conditions
- Feels like temperature
- Wind speed and gust
- Humidity and pressure
- Visibility
- UV index
- Cloud cover
- Dew point
- 7-day forecast
- Air quality index (AQI)

## Components

- **WeatherDashboard**: Main component managing state and API calls
- **SearchCity**: Search bar with city suggestions
- **CurrentWeather**: Current conditions display
- **WeatherDetails**: Detailed weather information
- **WeatherForecast**: 7-day forecast grid

## Customization

### Change default city
Edit `WeatherDashboard.js`:
```javascript
const [city, setCity] = useState('Your City Here');
```

### Modify colors
Edit component CSS files or main gradient in `WeatherDashboard.css`

### Add more weather details
Extend the API calls and add new components

## Deployment

### Vercel
```bash
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=build
```

Make sure to set environment variables in your deployment platform!
