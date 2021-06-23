import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  let forecastDate = new Date(props.dailyDetails.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = forecastDate.getDay();

  function minTemp() {
    let minTemp = Math.round(props.dailyDetails.temp.min);
    return minTemp;
  }

  function maxTemp() {
    let maxTemp = Math.round(props.dailyDetails.temp.max);
    return maxTemp;
  }

  return (
      <div className="DailyForecast">
        <div className="forecast-day">
          {days[day]}
        </div>
        <div className="forecast-icon">
          <WeatherIcon iconCode={props.dailyDetails.weather[0].icon} altDescription={props.dailyDetails.weather[0].description} />
        </div>
        <div className="forecast-temperature">
          <span className="temperature-min"> {minTemp()}° </span>
          |
          <span className="tempaerature-max"> {maxTemp()}° </span>
        </div>
      </div>);
}