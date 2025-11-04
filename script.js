function addToCart(name, price, qtyId) {
    let qty = parseInt(document.getElementById(qtyId).value, 10) || 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // If product already in cart, increase qty
    let existing = cart.find(item => item.product === name);
    if (existing) {
        existing.qty = parseInt(existing.qty, 10) + qty;
    } else {
        cart.push({
            product: name,
            price: price,
            qty: qty
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let div = document.getElementById("cartList");

    if (!div) return; // only run on cart page

    if (cart.length === 0) {
        div.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    let html = "";
    let total = 0;
    cart.forEach((item, index) => {
        let lineTotal = item.qty * item.price;
        total += lineTotal;
        html += `<div class="cart-item">
                    <div><strong>${item.product}</strong></div>
                    <div>Qty: ${item.qty}</div>
                    <div>Rp ${lineTotal}</div>
                 </div>`;
    });

    html += `<h3>Total: Rp ${total}</h3>`;
    div.innerHTML = html;
}

function placeOrder() {
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!name || !address) {
        alert("Please enter your name and address.");
        return;
    }
    if (cart.length === 0) {
        alert("Cart is empty.");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // For this simple system, we create one order entry per cart (aggregate)
    // but to keep your admin.html showing qty per item, we store an order with qty =
    // total quantity of sugar cookie (because only sugar cookie exists)
    let totalQty = cart.reduce((s, it) => s + parseInt(it.qty,10), 0);

    orders.push({
        name: name,
        address: address,
        qty: totalQty,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Order submitted!");
    window.location.href = "index.html";
}

window.onload = function() {
    // If we are on cart page, load cart content
    if (document.getElementById("cartList")) {
        loadCart();
    }
};
