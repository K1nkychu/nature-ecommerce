// cart.js - Handles cart operations
import { products, cart, saveCart } from "./store.js";

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    displayCartItems();
});

// Add to Cart Function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
}

// Update Cart Icon Count
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// Display Cart Items
function displayCartItems() {
    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    cart.forEach(product => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="assets/images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Remove Item from Cart
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
        displayCartItems();
    }
}

export { addToCart };



//🔹 What This Does:

//Loads cart items dynamically on cart.html.

//Updates the cart count icon when items are added.

//Allows users to remove items from the cart.

