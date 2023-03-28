const menu = document.querySelector('[data-menu]');
const activated = document.querySelector('[data-menu-active]');
const menuHamburguesa = ((event) => {
    event.preventDefault();
    activated.classList.toggle('menu__list-show');
  });
menu.addEventListener('click',menuHamburguesa);