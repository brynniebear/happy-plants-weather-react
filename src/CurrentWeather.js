import React from 'react';
import SearchForm from "./SearchForm"
import "./CurrentWeather.css"

export default function CurrentWeather() {
  return (
  <div className="Current-Weather">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-4">
              <h1>Current Weather</h1>
            </div>
            <div className="col-8">
              <SearchForm />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <p>CurrentWeatherImage City DateTime </p>
            </div>
            <div className="col-4">
              </div>
              <p>Temperature and Weather Details</p>
            </div>
        </div>
      </div>
  </div>
  );
}