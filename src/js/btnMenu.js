const $menu = document.querySelector('.menu')
const $btnMenu = document.querySelector('.btnMenu')

$btnMenu.addEventListener('click', function(){
    $menu.classList.toggle('menu_open')
})