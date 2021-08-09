// select dom elements
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuBranding=document.querySelector('.menu-branding');
const menuNav=document.querySelector('.menu-nav');
const menuItems=document.querySelectorAll('.nav-item');

//set initial value
let showMenu=false;
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach(item=>item.classList.add('show'));

        // Rset menu state
        showMenu=true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach(item=>item.classList.remove('show'));

        // Rset menu stat
        showMenu=false;
    }
}