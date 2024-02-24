const decButton = document.querySelector(`button[data-action="decrement"]`);
const incButton = document.querySelector(`button[data-action="increment"]`);
const value = document.querySelector("#value");
let counterValue = 0;

decButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
