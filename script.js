// --- CART SYSTEM ---
let cart = [];

function addToCart(name, price, qtyId) {
    let qty = document.getElementById(qtyId).value;
    cart.push({ name, price, qty });

    alert("Added to cart!");
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    let cartBox = document.getElementById("cart");

    if (!cartData || cartData.length === 0) {
        cartBox.innerHTML = "Your cart is empty";
        return;
    }

    cartBox.innerHTML = cartData.map(item =>
        `${item.qty} × ${item.name} — Rp ${item.price * item.qty}`
    ).join("<br>");
}

function checkoutWhatsapp() {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    if (!cartData) return;

    let text = cartData.map(item =>
        `${item.qty}× ${item.name} (Rp ${item.price * item.qty})`
    ).join("%0A");

    let url = `https://wa.me/6281380318085?text=Order:%0A${text}`;
    window.open(url, "_blank");
}

// --- GOOGLE SIGN IN (Firebase) ---
// add Firebase CDN in index.html BEFORE script.js

document.getElementById("loginBtn")?.addEventListener("click", function(){
    alert("Google Login Coming Soon");
});
