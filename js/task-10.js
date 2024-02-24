function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputNum = document.querySelector("[type='number']");
const boxField = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  for (let i = 1; i <= inputNum.value; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${i * 10 + 30}px`;
    box.style.height = `${i * 10 + 30}px`;
    boxField.append(box);
  }
});

destroyBtn.addEventListener("click", () => {
  boxField.textContent = "";
});
