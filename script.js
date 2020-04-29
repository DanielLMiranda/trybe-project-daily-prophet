const menuButton = document.querySelector('.menu-button');
const menuLine = document.querySelector('.menu-line');
// const nav = document.querySelector('.menu-line');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links-active');
  menuLine.classList.toggle('menu-line-active');
});
