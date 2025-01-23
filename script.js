let cart = [];

// Function to add items to the cart
function addToCart(item, price) {
    cart.push({ item, price });
    alert(`${item} has been added to your cart!`);
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    
    // Clear previous cart items
    cartItemsDiv.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalDiv.innerHTML = '';
        return;
    }

    let total = 0;
    cart.forEach((cartItem) => {
        total += cartItem.price;
        cartItemsDiv.innerHTML += `<p>${cartItem.item} - $${cartItem.price}</p>`;
    });

    cartTotalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
}

// Function to clear the cart
function clearCart() {
    cart = [];
    displayCart();
}

// Check if on cart page and display cart items
if (window.location.pathname.endsWith('cart.html')) {
    displayCart();
}

// Contact form submission handling
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});