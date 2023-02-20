const container = document.querySelector(".container"),
  showBtn = document.querySelector(".show-popup"),
  closeBtn = document.querySelector(".close"),
  overlay = document.querySelector(".overlay");

showBtn.addEventListener("click", () => {
  container.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("show");
});
overlay.addEventListener("click", () => {
  container.classList.remove("show");
});
