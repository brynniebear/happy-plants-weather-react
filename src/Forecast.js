import React, { useState } from 'react';
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastDetails, setForecastDetails] = useState(null);

  function showDailyForecast(response) {
    setForecastDetails(response.data.daily);
    setReady(true);
    console.log(forecastDetails);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-3">
            <div className="forecast-day">
              {forecastDetails[0].dt}
            </div>
            <div className="forecast-icon">
              <WeatherIcon iconCode={forecastDetails[0].weather[0].icon} altDescription={forecastDetails[0].weather[0].description} />
            </div>
            <div className="forecast-temperature">
              <span className="temperature-min"> {forecastDetails[0].temp.min}° </span>
              |
              <span className="tempaerature-max"> {forecastDetails[0].temp.max}° </span>
            </div>
          </div>
        </div>
      </div>);
  } else {
    let apiKey = `0b3b5277b18a1568b6ccacadee647a9b`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showDailyForecast);
    return null;
  }
}