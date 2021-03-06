import React from "react";
import DisplayedDate from "./DisplayedDate";
import WeatherIcon from "./WeatherIcon";

export default function DisplayedWeather(props) {

  return (
    <div className="row DisplayedWeather">
      <div className="col-md-6">
        <div className="city">
          <h4>
            Welcome to <div className="city-name">{props.details.cityName}</div>
          </h4>
        </div>
        <DisplayedDate details={props.details.date} />
      </div>
      <div className="col-md-2">
        <WeatherIcon iconCode={props.details.iconCode} altDescription={props.details.description} />
      </div>
      <div className="col-md-4">
        <div className="temperature">
          <p>
            <span className="temp-value">{Math.round(props.details.temperature)}</span>°C
          </p>
        </div>
        <div className="weather-details">
          <div className="current-description">{props.details.description}</div>
          Wind:
          <span className="wind-speed"> {Math.round(props.details.wind * 3.6)}</span>km/h
          <br />
          Humidity:
          <span className="humidity"> {props.details.humidity}</span>%
          <br />
        </div>
      </div>
    </div>);
}