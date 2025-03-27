// assets/js/scripts.js

document.addEventListener("DOMContentLoaded", function () {
    // Example product data (could be replaced with API data later)
    const products = [
        { id: 1, name: "Eco-Friendly Water Bottle", price: 15.99, img: "assets/images/water-bottle.jpg" },
        { id: 2, name: "Bamboo Toothbrush", price: 4.99, img: "assets/images/toothbrush.jpg" },
        { id: 3, name: "Reusable Shopping Bag", price: 9.99, img: "assets/images/bag.jpg" }
    ];

    const productsContainer = document.getElementById("products");

    // Generate HTML for products
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
