const images = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "./images/img6.jpg",
  "./images/img7.jpg",
  "./images/img8.jpg",
  "./images/img9.jpg",
  "./images/img10.jpg",
];

// getting all the elements to change with js
const buttons = document.querySelectorAll(".btn");
const imgContainer = document.querySelector(".image-container");
const imgText = document.querySelector(".text");

// getting current image from localstorage if not found then setting to 0
let currentImage = parseInt(localStorage.getItem("currentImage")) || 0;

// when page loaded it will show first image from above images array
window.addEventListener("load", () => {
  showSlider(currentImage);
});

// images changes on click of button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("right-btn")) {
      currentImage++;
      // reseting image count
      if (currentImage > images.length - 1) {
        currentImage = 0;
      }
      // setting currentimage in localstorage
      localStorage.setItem("currentImage", currentImage);
      showSlider(currentImage);
    } else if (button.classList.contains("left-btn")) {
      currentImage--;
      // reseting image count
      if (currentImage < 0) {
        currentImage = images.length - 1;
      }
      // setting currentimage in localstorage
      localStorage.setItem("currentImage", currentImage);
      showSlider(currentImage);
    }
  });
});

// function for display image and image text
function showSlider(currimg) {
  imgContainer.style.backgroundImage = `url(${images[currimg]})`;
  imgText.textContent = `image-${currimg + 1}`;
}
