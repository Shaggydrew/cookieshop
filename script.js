let cart = [];
const WHATSAPP_NUMBER = "6281380318085"; // ✅ Your WhatsApp number

function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById("cartCount").innerText = cart.length;
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";

    let itemList = "";
    let total = 0;

    cart.forEach(item => {
        itemList += `<li>${item.name} - Rp ${item.price}</li>`;
        total += item.price;
    });

    document.getElementById("cartItems").innerHTML = itemList;
    document.getElementById("totalPrice").innerText = total;
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function checkout() {
    if (cart.length === 0) return alert("Cart is empty!");

    let message = "Order:%0A";
    cart.forEach(item => {
        message += `- ${item.name}%0A`;
    });

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url);
}
