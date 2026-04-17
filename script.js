/* Minimal JavaScript for Mobile Menu Toggle */
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function toggleCategories() {
    const list = document.getElementById('categoryList');
    list.classList.toggle('show');
}