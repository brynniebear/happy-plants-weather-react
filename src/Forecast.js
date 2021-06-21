import React from 'react';
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let apiKey = `0b3b5277b18a1568b6ccacadee647a9b`;
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showDailyForecast);

  function showDailyForecast(response) {
    console.log(response);
  }

  return (
  <div className="Forecast">
    <div className="row">
      <div className="col-3">
        <div className="forecast-day">
          Mon
        </div>
        <div className="forecast-icon">
          🌞
        </div>
        <div className="forecast-temperature">
          <span className="temperature-min"> 19 </span>
           | 
           <span className="tempaerature-max"> 25 </span>
        </div>
      </div>
    </div>
  </div>);
}