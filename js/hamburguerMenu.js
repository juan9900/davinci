window.onload = function (){
    const menu_btn = document.querySelector('.hamburger-container');
    const hamburger_icon_container = document.querySelector('.hamburguer');
    const mobile_menu = document.querySelector('.mobile-nav');
    const menu_items = document.querySelectorAll('.mobile-nav a');
    menu_btn.addEventListener('click', function (){
        hamburger_icon_container.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active')
    });
    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].addEventListener('click',function(){
            hamburger_icon_container.classList.toggle('is-active');
            mobile_menu.classList.toggle('is-active')
        })
            
}
}