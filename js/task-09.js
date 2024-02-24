function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeBtn.addEventListener("click", () => {
  const tempColor = getRandomHexColor();
  document.body.style.backgroundColor = tempColor;
  colorName.textContent = tempColor;
});
