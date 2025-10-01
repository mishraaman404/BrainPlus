document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navToggle.textContent = '☰'; // Cross icon
        } else {
            navToggle.textContent = '✖'; // Hamburger icon
        }
        navLinks.classList.toggle('active');
    });
});
