// assets/js/store.js

// Import the product data from product.js
import products from "./product.js";

// Retrieve cart from session storage; if not found, initialize an empty array.
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

/**
 * Saves the current state of the cart to session storage.
 */
function saveCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

/**
 * Adds a product to the cart by productId.
 * Looks up the product in the products array and, if found, adds it.
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
}

/**
 * Removes a product from the cart by productId.
 */
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
    }
}

/**
 * Returns the current cart items.
 */
function getCart() {
    return cart;
}

/**
 * Updates the cart count element in the DOM.
 * This function assumes there is an element with the id "cart-count".
 */
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

/**
 * Function to update and display the shopping cart
 */
function displayCart() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear current cart display

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(product => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <img src="assets/images/${product.image}" alt="${product.name}">
            <p>${product.name} - $${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });
}


// Export functions and cart for use in other modules.
export { products, addToCart, removeFromCart, getCart, updateCartCount };


//📝 Explanation:


//addToCart(productId) function://--

//Retrieves the cart from sessionStorage.--

//Finds the product by ID and adds it to the cart.

//Updates the cart count and alerts the user.

//removeFromCart(productId) function://--

//Filters out the selected product and updates the cart storage.

//displayCart() function://--

//Gets the cart items from storage.

//Loops through products and dynamically creates the cart items.