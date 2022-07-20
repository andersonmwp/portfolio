//Evento abre e fecha do menu hamburguer
const menuBurger = document.querySelector('.burger');

function menuActive() {
    menuBurger.classList.toggle('active');
}

menuBurger.addEventListener('click', menuActive);

// Abrir e fechar navbar
const btnMenu = document.querySelector('.menu__mobile .burger');

function openMenu() {
    const menuMobile = document.querySelector('.menu');

    menuMobile.classList.toggle('menu_open');
}

btnMenu.addEventListener('click', openMenu);

// Remover as classes para fechar o menu ao clicar no link
const menuLinks = document.querySelectorAll('.menu__mobile-item a');

function closeMenu() {
    const menuBurger = document.querySelector('.burger');
    const menuMobile = document.querySelector('.menu');

    menuBurger.classList.remove('active');
    menuMobile.classList.remove('menu_open');
}

menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});