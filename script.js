let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart!");
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";
    let list = document.getElementById("cartItems");
    list.innerHTML = "";
    cart.forEach(item => {
        list.innerHTML += `<li>${item.name} - Rp ${item.price}</li>`;
    });
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function checkout() {
    let message = "Hello! I want to order:\n";
    cart.forEach(item => {
        message += `- ${item.name} Rp ${item.price}\n`;
    });
    window.open("https://wa.me/6281380318085?text=" + encodeURIComponent(message));
}
