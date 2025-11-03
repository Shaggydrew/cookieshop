function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}

function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");
    let total = 0;
    container.innerHTML = "";

    cart.forEach(item => {
        container.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });

    document.getElementById("total-price").innerText = total;
}

function clearCart() {
    localStorage.removeItem("cart");
    window.location.reload();
}

if (window.location.pathname.includes("cart.html")) {
    showCart();
}

const orderForm = document.getElementById("orderForm");
if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("Cart is empty!");
            return;
        }

        let total = cart.reduce((sum, item) => sum + item.price, 0);

        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push({ name, address, cart, total });
        localStorage.setItem("orders", JSON.stringify(orders));

        localStorage.removeItem("cart");
        document.getElementById("message").innerText = "Order submitted!";
        orderForm.reset();
    });
}
