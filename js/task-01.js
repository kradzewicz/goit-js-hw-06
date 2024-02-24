const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);

const headerList = document.querySelectorAll("h2");
const elementCount = document.querySelectorAll("#categories .item ul");
console.log(`Category: ${headerList[0].textContent}`);
console.log(`Elements: ${elementCount[0].children.length}`);
console.log(`Category: ${headerList[1].textContent}`);
console.log(`Elements: ${elementCount[1].children.length}`);
console.log(`Category: ${headerList[2].textContent}`);
console.log(`Elements: ${elementCount[2].children.length}`);
