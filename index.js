const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenuMobile');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
