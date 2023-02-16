const generateBtn = document.querySelector(".generate-btn");
const boxes = document.querySelector(".boxes");

const maxboxes = 30;

// creating color boxes
for (let i = 0; i < maxboxes; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  boxes.appendChild(box);
}

// generating random hexcode
const randomColor = () => {
  let hexCode = Math.random().toString(16);
  hexCode = `#${hexCode.slice(2, 8).padStart(6, "0")}`;
  return hexCode;
};

// another way of generating color code with rgb values
// const randomColor = () => {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   let rgbCode = `rgb(${red} , ${green} , ${blue})`;
//   return rgbCode;
// };

// updating colors on generate button
const updatingColors = () => {
  //selected the color box
  const box = document.querySelectorAll(".box");
  // updating colors to each colorbox
  box.forEach((box) => {
    let colorCode = randomColor();
    box.style.backgroundColor = colorCode;
    box.textContent = colorCode.toUpperCase();

    // adding functionality to copy to clipboard when clip on color box
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(colorCode);
      box.innerHTML = "copied";
      setTimeout(() => {
        box.innerHTML = colorCode.toUpperCase();
      }, 1000);
    });
  });
};

window.addEventListener("load", updatingColors);

generateBtn.addEventListener("click", updatingColors);
