/* Variables */

const emailInput = document.querySelector("input");
const button = document.querySelector(".btn");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");
const emailBox = document.querySelector(".email-box");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Email validation */

button.addEventListener("click", () => {
  if (emailInput.value.match(regex)) {
    emailBox.classList.add("valid");
    emailBox.classList.remove("invalid");
    errorMessage.classList.remove("visible");
    errorIcon.classList.remove("visible");
    emailInput.value = "";
  } else {
    emailBox.classList.remove("valid");
    emailBox.classList.add("invalid");
    errorMessage.classList.add("visible");
    errorIcon.classList.add("visible");
  }

  setTimeout(() => {
    emailBox.classList.remove("valid");
  }, 2000);
});
