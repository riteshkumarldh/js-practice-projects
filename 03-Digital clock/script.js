const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");
const ampmEl = document.querySelector(".ampm");
const dayEl = document.querySelector(".day");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

digitalClock();

function digitalClock() {
  let date = new Date();

  let day = date.getDay();
  dayEl.textContent = days[day];

  // get times
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = "AM";

  // dealing with hour 12hr format
  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  // updating time in webpage
  hourEl.textContent = hour < 10 ? `0${hour}` : hour;
  minuteEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  ampmEl.textContent = ampm;
}

setInterval(() => {
  digitalClock();
}, 1000);
