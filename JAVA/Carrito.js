let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((sum, item) => sum + item.price, 0);

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalSpan = document.getElementById('total');

    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    total = cart.reduce((sum, item) => sum + item.price, 0);
    totalSpan.textContent = total.toFixed(2);

    localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        cart.push({ name: productName, price: productPrice });

        updateCart();
    });
});

document.getElementById('clear-cart').addEventListener('click', function() {
    cart = [];
    updateCart();
});

updateCart();
