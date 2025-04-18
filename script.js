document.addEventListener('DOMContentLoaded', function() {
    // Toggle between cart and account views
    const accountIcon = document.querySelector('.account-icon');
    const cartIcon = document.querySelector('.cart-icon');
    const accountLink = document.querySelector('.account-link');
    const cartContent = document.querySelector('.cart-content');
    const accountContent = document.querySelector('.account-content');

    function showCart() {
        cartContent.classList.remove('d-none');
        accountContent.classList.add('d-none');
    }

    function showAccount() {
        cartContent.classList.add('d-none');
        accountContent.classList.remove('d-none');
    }

    accountIcon.addEventListener('click', showAccount);
    cartIcon.addEventListener('click', showCart);
    accountLink.addEventListener('click', showAccount);

    // Initialize with cart view
    showCart();
});