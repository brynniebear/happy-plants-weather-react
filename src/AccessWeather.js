import React, { useState } from "react";
import axios from "axios";
import "./AccessWeather.css";

export default function AccessWeather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconCode, setIconCode] = useState(null);
  let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIconCode(response.data.weather[0].icon);
  }

  let apiKey = `008503e09bc70b0d4ab69e6985ccd034`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.newCity}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);

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
          <img src={iconUrl} alt={description} className="current-weather-image"/>
        </div>
      <div className="col-4">
        <div className="temperature">
          <p>
            <span className="temp-value">{Math.round(temperature)}</span>°C
          </p>
        </div>
        <div className="weather-details">
          <div className="current-description">{description}</div>
          Wind:
          <span className="wind-speed"> {Math.round(wind)}</span>km/h
          <br />
          Humidity:
          <span className="humidity"> {humidity}</span>%
          <br />
        </div>
      </div>
    </div>
  );
}
