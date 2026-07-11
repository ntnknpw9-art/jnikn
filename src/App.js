import React, { useState } from 'react';
import './App.css';
import WeatherDashboard from './components/WeatherDashboard';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`app ${theme}`}>
      <WeatherDashboard />
    </div>
  );
}

export default App;
