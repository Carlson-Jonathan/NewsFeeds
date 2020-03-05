import React, { useState } from "react";

let today = new Date();

let day = today.getDate();
let year = today.getFullYear();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var months = [
  "Jan.",
  "Feb.",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec."
];

var weekday = days[today.getDay()];
var month = months[today.getMonth()];

let start = 0;
function showTime() {
  // setInterval() forces the function to re-render every XXXX ms!
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  if (start === 0) setInterval(updateTime, 1000);
  start++;

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <React.Fragment>
      {weekday}, {month} {day}, {year} - {time}
    </React.Fragment>
  );
}

export default showTime;
