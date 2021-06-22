import React from "react";

export default function WeatherIcon(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.iconCode}@2x.png`;
  let altDescription = props.description;
  return (
    <img src={iconUrl} alt={altDescription} className="current-weather-image" />);
}