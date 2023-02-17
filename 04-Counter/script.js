const numberEl = document.querySelector(".number");
const buttons = document.querySelectorAll("button");

let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //updating counter througn targeting class
    if (button.classList.contains("increase")) {
      count++;
    } else if (button.classList.contains("decrease")) {
      count--;
    } else if (button.classList.contains("reset")) {
      count = 0;
    }

    // adding color
    if (count > 0) {
      numberEl.style.color = "green";
    } else if (count < 0) {
      numberEl.style.color = "red";
    } else {
      numberEl.style.color = "#8899A6";
    }

    numberEl.textContent = count;
    // console.log(count);
  });
});
