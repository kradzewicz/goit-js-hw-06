const sizeControler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControler.addEventListener("input", () => {
  text.style.fontSize = `${sizeControler.value}px`;
});
