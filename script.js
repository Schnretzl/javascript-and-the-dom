// 1. Document Manipulation with JavaScript
// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Write a function to display the product information on the webpage dynamically.

function renderProducts() {
    let productsList = document.getElementById("products");
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;
        productsList.appendChild(productDiv);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads.

window.addEventListener("load", renderProducts);