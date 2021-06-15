import React, { useState } from 'react';
import axios from "axios";
import DisplayedWeather from "./DisplayedWeather";
import Forecast from "./Forecast";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState( {ready:false});

  function handleSubmit(event) {
        event.preventDefault();
          search();
      }
  
  function searchCity(event) {
      setCity(event.target.value);
    }

  function showWeather(response) {
    setWeatherData({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });
  }

function search() {
  const apiKey = `008503e09bc70b0d4ab69e6985ccd034`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

if (weatherData.ready === true) {
  return (
  <div className="Current-Weather">
    <div className="card">
      <div className="search">
      <div className="card-header">
        <div className="row">
          <div className="col-4">
            <h1>Current Weather</h1>
          </div>
          <div className="col-8 search-interaction">
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
            <button className="btn btn-light button">
              <span className="units">°F</span>
            </button>
          </div>
          </div>
        </div>
      </div>
        <div className="card-body">
            <DisplayedWeather details={weatherData} />
          <div className="row">
            <Forecast />
          </div>
        </div>
    </div>
  </div>
  );
    } else {
    search()
    return ("Loading...")
  }
}