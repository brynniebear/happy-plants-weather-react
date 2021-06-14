import React, { useState } from 'react';
import axios from "axios";
import DisplayedDate from "./DisplayedDate";
import Forecast from "./Forecast";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState( {ready:false});

  function handleSubmit(event) {
        event.preventDefault();
        if (city) {
          search();
      }
    }
  
  function searchCity(event) {
      setCity(event.target.value);
    }

  function showWeather(response) {
    console.log(response);
    setWeatherData({
      cityName: city,
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

if (city === props.defaultCity && weatherData.ready === false) {
  search(city);
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
              <div className="row AcessWeather">
                <div className="col-6">
                  <div className="city">
                    <h4>
                      Welcome to <span className="city-name">{weatherData.cityName}</span>
                    </h4>
                  </div>

                    <DisplayedDate details={weatherData.date} />

                </div>
                <div className="col-2">
                  <img src={weatherData.iconUrl} alt={weatherData.description} className="current-weather-image"/>
                </div>
              <div className="col-4">
                <div className="temperature">
                  <p>
                    <span className="temp-value">{Math.round(weatherData.temperature)}</span>°C
                  </p>
                </div>
                <div className="weather-details">
                  <div className="current-description">{weatherData.description}</div>
                  Wind:
                  <span className="wind-speed"> {Math.round(weatherData.wind)}</span>km/h
                  <br />
                  Humidity:
                  <span className="humidity"> {weatherData.humidity}</span>%
                  <br />
                </div>
              </div>
            </div>
          <div className="row">
            <Forecast />
          </div>
        </div>
    </div>
  </div>
  );
    } else {
  return ("Loading...")
  }
}