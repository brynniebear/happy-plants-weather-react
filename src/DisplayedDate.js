import React from 'react';

export default function DisplayedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = props.details.getDay()
  let hours = props.details.getHours()
  if (hours < 10) {
    hours = `0${hours}`
  }
  let minutes = props.details.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  let timezone = props.details.getTimezone();

  return <div className="date-time">{days[day]} {hours}:{minutes} {timezone}</div>;
}