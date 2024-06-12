import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (location) => {
    try {
      const apiKey = '895284fb2d2c50a520ea537456963d9c';  // Replace with your OpenWeather API key
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError('');
    } catch (error) {
      setError('Unable to fetch weather data. Please check the location and try again.');
    }
  };

  const handleSearch = () => {
    if (location) {
      fetchWeather(location);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="app-header">
        <h1>Weather App</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p className='description'>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} MPH</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>Visibility: {weatherData.visibility} meters</p>
            <p>Cloudiness: {weatherData.clouds.all}%</p>
            <p>Date & Time: {new Date().toLocaleString()}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
