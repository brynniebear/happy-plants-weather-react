import React from 'react';
import "./SearchForm.css";


export default function SearchForm() {
  return (
        <div className="search">
      <form className="search-form">
        <input
          type="search"
          placeholder="City name"
          className="change-city-text"
          autoComplete="off"
          autoFocus="on"
        />
        <input
          type="submit"
          className="btn btn-light button"
          value="Change City"
        />
      </form>
      <button className="btn btn-light button">Current Location</button>
      <button className="btn btn-light button">
        <span className="units">°F</span>
      </button>
    </div>
  );
}