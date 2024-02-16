fetch("https://restaurant.webwide.ge/api/Products/GetAll")

.then((response) => response.json())

.then((products) => {

console.log(products);

const productContainer = document.getElementById("card")

products.forEach((product) => {

const card = createProductCard(product);

productContainer.appendChild(card);

});

})

.catch((error) => console.log(error));

function createProductCard(product) {
    
const cards - document.createElement("div");

cards.classList.add("column");