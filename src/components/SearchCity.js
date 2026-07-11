import React, { useState } from 'react';
import './SearchCity.css';

const SearchCity = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Simple suggestions - in a real app, you'd fetch from API
    if (value.length > 1) {
      const commonCities = [
        'London',
        'New York',
        'Tokyo',
        'Paris',
        'Dubai',
        'Sydney',
        'Toronto',
        'Berlin',
        'Madrid',
        'Amsterdam',
        'Tel Aviv',
        'Bangkok',
        'Singapore',
        'Hong Kong',
        'Mumbai',
      ];

      const filtered = commonCities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput('');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    onSearch(city);
    setInput('');
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a city..."
          value={input}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(city)}
              className="suggestion-item"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchCity;
