import React from 'react';

export default function DisplayedDate(props) {

  let hours = props.details.getHours();
  if (hours < 10) {
    hours = `0${hours}`
  }
  let minutes = props.details.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  let date = props.details.toDateString();

  return <div className="date-time">{date}  |  {hours}:{minutes}</div>;
}