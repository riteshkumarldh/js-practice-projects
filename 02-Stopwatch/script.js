const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const snap = document.querySelector(".snap");
const reset = document.querySelector(".reset");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");
const ms = document.querySelector(".ms");
const ul = document.querySelector("ul");

let minutes = `0${0}`;
let seconds = `0${0}`;
let milisec = `0${0}`;
let watchrun = false;

const stopwatchStart = () => {
  if (!watchrun) {
    watchrun = true;
    intervalId = setInterval(() => {
      milisec++;
      milisec = milisec < 10 ? `0${milisec}` : milisec;

      if (milisec > 99) {
        seconds++;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        milisec = `0${0}`;
      }
      if (seconds > 59) {
        minutes++;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = `0${0}`;
      }

      ms.innerText = milisec;
      sc.innerText = seconds;
      mn.innerText = minutes;
    }, 10);
  }
};

const stopwatchStop = () => {
  if (watchrun) {
    watchrun = false;
    clearInterval(intervalId);
  }
};

const stopwatchSnap = () => {
  if (watchrun) {
    let snapshot = document.createElement("li");
    snapshot.innerText = `${minutes}:${seconds}:${milisec}`;
    ul.appendChild(snapshot);
  }
};

const stopwatchReset = () => {
  if (watchrun) {
    clearInterval(intervalId);
  }
  minutes = `0${0}`;
  seconds = `0${0}`;
  milisec = `0${0}`;
  watchrun = false;

  ms.innerText = milisec;
  sc.innerText = seconds;
  mn.innerText = minutes;

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

start.addEventListener("click", stopwatchStart);
snap.addEventListener("click", stopwatchSnap);
stop.addEventListener("click", stopwatchStop);
reset.addEventListener("click", stopwatchReset);
