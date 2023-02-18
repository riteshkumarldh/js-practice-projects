const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const formSubmit = document.querySelector(".bmi-form");
const bmiData = document.querySelector(".data");
const bmistatus = document.querySelector(".status");

let height = 0;
let weight = 0;

heightEl.addEventListener("change", (e) => {
  height = e.target.value;
});
weightEl.addEventListener("change", (e) => {
  weight = e.target.value;
});

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateBmi();
});

function calculateBmi() {
  let bmi = (weight / (height * height)) * 10000;
  bmi = bmi.toFixed(2);

  if (height == 0 || weight == 0) {
    alert("Please Enter the correct details");
  }

  if (bmi <= 18) {
    bmistatus.textContent = "UnderWeight";
  } else if (bmi <= 24) {
    bmistatus.textContent = "Optimal";
  } else if (bmi <= 30) {
    bmistatus.textContent = "Overweight";
  } else {
    bmistatus.textContent = "HeavyOverweight";
  }

  bmiData.textContent = bmi;
}
