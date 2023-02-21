const loginForm = document.querySelector(".login-form"),
  submitBtn = loginForm.querySelector(".submit-btn"),
  inputField = loginForm.querySelectorAll(".input-field"),
  inputDetails = loginForm.querySelectorAll(".input-details");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  inputField.forEach((input) => {
    if (input.value == "") {
      loginForm.classList.add("error");
      inputDetails.forEach((inp) => {
        inp.classList.add("shake");
        setTimeout(() => {
          inp.classList.remove("shake");
        }, 500);
      });
    }
  });
});

inputField.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    loginForm.classList.remove("error");
  });
});
