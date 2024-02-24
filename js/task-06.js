const input = document.querySelector("#validation-input");

input.addEventListener("input", () => {
  if (input.value.length === 6) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
});
