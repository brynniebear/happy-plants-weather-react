import React, { useState, useEffect } from 'react';
import DailyForecast from "./DailyForecast";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastDetails, setForecastDetails] = useState(null);

  useEffect (() => {
    setReady(false);
  }, [props.coordinates]);

  function showDailyForecast(response) {
    setForecastDetails(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastDetails.map(function(dailyForecast, index){
            if (index < 6) {
            return (<div className="col-sm-2" key={index}><DailyForecast dailyDetails={forecastDetails[index]} /></div>);
            } else {
              return null;
            }
          })}
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