import React, { useState } from 'react';
import AccessWeather from "./AccessWeather";
import Forecast from "./Forecast";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [city, setCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState("Enter a city name to see the current weather ☁");

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      setCurrentWeather(<AccessWeather newCity={city} />);
  }
}

  function searchCity(event) {
    setCity(event.target.value);
  }
  return (
  <div className="Current-Weather">
    <div className="card">
      <div className="search">
      <div className="card-header">
        <div className="row">
          <div className="col-4">
            <h1>Current Weather</h1>
          </div>
          <div className="col-8">
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="City name"
                className="change-city-text"
                autoComplete="off"
                autoFocus="on"
                onChange={searchCity}
              />
              <input
                type="submit"
                className="btn btn-light button"
                value="Change City"
              />
            </form>
            <button className="btn btn-light button">Current Location</button>
            <button className="btn btn-light button">
              <span className="units">°F</span>
            </button>
          </div>
          </div>
        </div>
      </div>
        <div className="card-body">
            {currentWeather}
          <div className="row">
            <Forecast />
          </div>
        </div>
    </div>
  </div>
  );
}