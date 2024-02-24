const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.className = "item";
  li.textContent = ingredient;
  ingredientsList.append(li);
});
