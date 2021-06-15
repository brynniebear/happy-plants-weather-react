import React from "react";
import DisplayedDate from "./DisplayedDate";

export default function DisplayedWeather (props) {

return (    
  <div className="row AcessWeather">
                <div className="col-6">
                  <div className="city">
                    <h4>
                      Welcome to <div className="city-name">{props.details.cityName}</div>
                    </h4>
                  </div>
                    <DisplayedDate details={props.details.date} />
                </div>
                <div className="col-2">
                  <img src={props.details.iconUrl} alt={props.details.description} className="current-weather-image"/>
                </div>
              <div className="col-4">
                <div className="temperature">
                  <p>
                    <span className="temp-value">{Math.round(props.details.temperature)}</span>°C
                  </p>
                </div>
                <div className="weather-details">
                  <div className="current-description">{props.details.description}</div>
                  Wind:
                  <span className="wind-speed"> {Math.round(props.details.wind)}</span>km/h
                  <br />
                  Humidity:
                  <span className="humidity"> {props.details.humidity}</span>%
                  <br />
                </div>
              </div>
            </div>);
            }