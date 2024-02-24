const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = loginForm.elements.email.value;
  const passwordValue = loginForm.elements.password.value;
  const form = {};
  form.email = emailValue;
  form.password = passwordValue;

  if (emailValue === "" || passwordValue === "") {
    return console.log("Proszę uzupełnić wszystkie pola");
  }
  console.log(form);
  loginForm.reset();
});
