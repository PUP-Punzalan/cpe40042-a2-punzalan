const toggleBtn = document.querySelector('#toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});