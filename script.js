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


// 2. Form Manipulation with JavaScript
// Task 2: Write JavaScript code to handle form submissions and store user input in an object.
// Task 3: Implement form validation to ensure that all required fields are filled before submission.

let form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        alert("Please fill out all required fields.");
        return;
    }

    event.preventDefault();
    let formData = new FormData(form);
    let contact = {};
    formData.forEach((value, key) => {
        contact[key] = value;
    });
    console.log(contact);
    form.reset();
});

