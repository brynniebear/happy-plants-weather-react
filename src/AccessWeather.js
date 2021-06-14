import React, { useState } from "react";
import axios from "axios";
import "./AccessWeather.css";

export default function AccessWeather(props) {
  const [weatherData, setWeatherData] = useState(props.ready);


  function showWeather(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });
  }

  if (weatherData.ready) {
  return (
    <div className="row AcessWeather">
        <div className="col-6">
          <div className="city">
            <h4>
              Welcome to <span className="city-name">{props.newCity}</span>
            </h4>
          </div>
          <div className="date-time">
            <p>Last Updated on May 18 at 18:00</p>
          </div>
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
  );
  } else {
  const apiKey = `008503e09bc70b0d4ab69e6985ccd034`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.newCity}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
  return ("Loading...")
  }



}
