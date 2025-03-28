// assets/js/scripts.js

// Import necessary functions and data from store.js.
import { products, addToCart, updateCartCount } from "./store.js";

document.addEventListener("DOMContentLoaded", function () {
    // Get the container where products will be displayed.
    const productsContainer = document.getElementById("products");

    // If the container doesn't exist (on pages without product listings), exit early.
    if (!productsContainer) return;

    // Loop through every product in the products array.
    products.forEach(product => {
        // Create a new div element for the product.
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        // Also set a custom attribute for filtering by category.
        productElement.setAttribute("data-category", product.category);

        // Set the inner HTML of the product element with details.
        productElement.innerHTML = `
            <img src="assets/images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="handleAddToCart(${product.id})">Add to Cart</button>
            <button onclick="viewProduct(${product.id})">View Details</button>
        `;

        // Append the product element to the container.
        productsContainer.appendChild(productElement);
    });

    // Initialize the cart count display.
    updateCartCount();
});

/**
 * Global function to handle adding a product to the cart.
 * This wraps the imported addToCart function.
 */
function handleAddToCart(productId) {
    addToCart(productId);
}

/**
 * Redirects the user to the product details page for the given productId.
 */
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

/**
 * Filter function to show/hide products based on a category.
 * Use this function with a category button or selector.
 */
function filterCategory(category) {
    const productElements = document.querySelectorAll(".product");

    productElements.forEach(element => {
        // Get the product's category from the custom attribute.
        const productCategory = element.getAttribute("data-category");
        // Show all products if "All" is selected or match the category.
        if (category === "All" || productCategory === category) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

// Expose the filterCategory function to the global scope so it can be used by UI controls.
window.filterCategory = filterCategory;
// Also expose handleAddToCart if needed globally.
window.handleAddToCart = handleAddToCart;






//📝 Explanation of file


//Lines 3–4: Import products and functions from store.js so you have access to the product data and cart operations.

//DOMContentLoaded listener: Waits until the page is loaded before running the code.

//Loop through products:

//Creates a new <div> for each product.

//Adds a CSS class (product) and a custom attribute (data-category) for filtering.

//Sets the inner HTML with an image, name, price, and two buttons:

//"Add to Cart" calls handleAddToCart() (which calls the imported addToCart()).

//"View Details" redirects to a product details page.

//updateCartCount(): Called to update the visible count of items in the cart.

//Global functions:

//handleAddToCart() and viewProduct() are defined to handle button clicks.

//filterCategory() is attached to the window object so it can be called from UI controls (for example, from a dropdown or button group).

