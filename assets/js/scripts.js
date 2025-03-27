// assets/js/scripts.js

document.addEventListener("DOMContentLoaded", function () {
    
    // Example product data (could be replaced with API data later)

    const products = [
        // 🌟 SIGNATURE PRODUCT
        { id: 1, category: 'Signature', name: 'The Fortune-Ki Key Necklace', price: 79.99, color: 'Golden Glow', description: 'A handcrafted enchanted key pendant, infused with celestial energy and prosperity blessings, designed to unlock success, wealth, and destiny.', image: 'fortune_ki_key.jpg' },
      
        // 🧼 SOAPS
        { id: 2, category: 'Soap', name: 'Fortune Ki Manifestation Soap', price: 14.99, color: 'Golden Amber', description: 'A handcrafted soap infused with cinnamon, basil, and gold mica to attract wealth and success.', image: 'fortune_manifest_soap.jpg' },
        { id: 3, category: 'Soap', name: 'Mystic Moon Soap', price: 13.99, color: 'Lavender Blue', description: 'Moon-charged soap with lavender and jasmine to cleanse energy and enhance intuition.', image: 'mystic_moon_soap.jpeg' },
        { id: 4, category: 'Soap', name: 'Golden Abundance Soap', price: 15.99, color: 'Honey Gold', description: 'A luxurious soap blended with honey, turmeric, and chamomile to invite prosperity.', image: 'golden_abundance_soap.jpeg' },
        { id: 5, category: 'Soap', name: 'Ki of Fortune Protection Soap', price: 12.99, color: 'Deep Charcoal', description: 'Infused with sage, frankincense, and black tourmaline essence for spiritual shielding.', image: 'protection_soap.jpeg' },
        { id: 6, category: 'Soap', name: 'Sacred Earth Soap', price: 12.99, color: 'Earthy Brown', description: 'Grounding soap with patchouli and sandalwood to balance your root chakra.', image: 'sacred_earth_soap.jpg' },
        { id: 7, category: 'Soap', name: 'Celestial Love Soap', price: 14.99, color: 'Soft Pink', description: 'Rose quartz-infused soap with rose and vanilla to attract romance and self-love.', image: 'celestial_love_soap.jpg' },
        { id: 8, category: 'Soap', name: 'Dream Weaver Soap', price: 16.99, color: 'off white', description: 'Infused with chamomile, mugwort, and moonstone essence to enhance lucid dreams and peaceful sleep.', image: 'dream_weaver_soap.jpg' },
        
        // ✨ SEASONAL SOAPS
        { id: 9, category: 'Soap', name: 'Spring Blossom Renewal Soap', price: 14.99, color: 'Cherry Blossom Pink', description: 'A floral-infused soap with cherry blossom, jasmine, and hibiscus for renewal and fresh beginnings.', image: 'spring_blossom_soap.jpg' },
        { id: 10, category: 'Soap', name: 'Autumn Harvest Abundance Soap', price: 15.99, color: 'Pumpkin Spice Orange', description: 'A warm, spiced blend of cinnamon, pumpkin, and nutmeg to attract prosperity and comfort.', image: 'autumn_harvest_soap.jpeg' },
      
        // 🧴 BODY BUTTERS
        { id: 11, category: 'Body Butter', name: 'Fortune Glow Body Butter', price: 19.99, color: 'Golden Glow', description: 'A whipped shea butter blend with gold flakes and vanilla for radiant, hydrated skin.', image: 'fortune_glow_butter.jpg' },
        { id: 12, category: 'Body Butter', name: 'Celestial Love Body Butter', price: 21.99, color: 'Rose Petal Pink', description: 'A luxurious rose and jasmine-infused butter to enhance attraction and self-love.', image: 'celestial_love_butter.jpg' },
        { id: 13, category: 'Body Butter', name: 'Enchanted Forest Body Butter', price: 19.49, color: 'Deep Forest Green', description: 'A herbal blend of pine, eucalyptus, and cedarwood to connect with nature’s magic.', image: 'enchanted_forest_butter.jpg' },
        { id: 14, category: 'Body Butter', name: 'Eternal Prosperity Butter', price: 24.99, color: '24K Gold', description: 'A rich gold-infused body butter, anointed with cinnamon and bergamot for long-lasting abundance and success.', image: 'eternal_prosperity_butter.jpg' },
      
        // ✨ MAGICKAL OILS
        { id: 15, category: 'Oil', name: 'Fortune Flow Oil', price: 25.99, color: 'Golden Amber', description: 'A potent blend of bay leaf, cinnamon, and gold flakes to attract financial success.', image: 'fortune_flow_oil.jpg' },
        { id: 16, category: 'Oil', name: 'Celestial Vision Oil', price: 26.99, color: 'Violet Purple', description: 'An anointing oil with mugwort and amethyst essence for enhanced intuition.', image: 'celestial_vision_oil.jpg' },
        { id: 17, category: 'Oil', name: 'Divine Love Oil', price: 27.99, color: 'Rose Gold', description: 'A rose quartz-infused oil for attracting soulmates and enhancing relationships.', image: 'divine_love_oil.jpg' },
      
        // ✨ SEASONAL OILS
        { id: 18, category: 'Oil', name: 'Winter Solstice Blessing Oil', price: 29.99, color: 'Snowy White', description: 'A peppermint and vanilla-infused oil, charged under the winter moon to bring clarity and new beginnings.', image: 'winter_solstice_oil.jpg' },
      
        // 💎 JEWELRY
        { id: 19, category: 'Jewelry', name: 'Manifestation Crystal Pendant', price: 44.99, color: 'Clear Quartz', description: 'A charged quartz pendant to amplify intentions and desires.', image: 'manifestation_pendant.jpg' },
        { id: 20, category: 'Jewelry', name: 'Prosperity Amulet Bracelet', price: 34.99, color: 'Gold', description: 'A charm bracelet infused with citrine and green aventurine to attract wealth and luck.', image: 'prosperity_amulet_bracelet.jpg' },
      
        // 🎁 MAGICKAL KITS & BUNDLES
        { id: 21, category: 'Bundle', name: 'Manifestation Box Set', price: 89.99, color: 'Royal Blue & Gold', description: 'A powerful set including Manifestation Soap, Fortune Flow Oil, a Citrine Bracelet, and a Ritual Guide to amplify your wealth attraction.', image: 'manifestation_box.jpg' },
        { id: 22, category: 'Bundle', name: 'Celestial Moon Ritual Kit', price: 99.99, color: 'Silver & Indigo', description: 'A dreamy kit including Moon Soap, Celestial Vision Oil, a Moonstone Pendant, and a Lunar Candle for deep spiritual awakening.', image: 'moon_ritual_kit.jpg' },
        { id: 23, category: 'Bundle', name: 'Protection Set', price: 79.99, color: 'Black & Red', description: 'Includes Black Tourmaline Bracelet, Ki Protection Soap, Sacred Protection Oil, and a Sage Bundle for maximum energetic shielding.', image: 'protection_set.jpg' }
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
