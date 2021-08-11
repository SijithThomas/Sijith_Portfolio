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

// ==============Typing Effect=============//
// const texts=['Front-End Developer','UI&Ux Designer'];
// let count=0;
// let index=0;
// let currentText="";
// let letter= "";
// (function type(){
//     if(count === texts.length){
//         count=0;
//     }
//     currentText=texts[count];
//     letter=currentText.slice(0, ++index);
//     document.querySelector('.type').innerHTML=letter;
//     if(letter.length === currentText.length){
//         count++;
//         index=0;
//     }
//     setTimeout(type, 200);
// }());
const textToDisplay=document.querySelector('.type')
const texts=['Front-End Developer ','UI&Ux Designer '];
let i=0;
let j=0;
let currentText=[];
let isDeleting= false;
let isEnd=false;

function type(){
    isEnd = false
    textToDisplay.innerHTML=currentText.join('')
    if(i < texts.length){


        if(!isDeleting && j <= texts[i].length){
            currentText.push(texts[i][j])
            j++
        }
        if(isDeleting && j <= texts[i].length){
            currentText.pop(texts[i][j])
            j--
        }

        if(j == texts[i].length ){
         isEnd=true
         isDeleting=true;
         
        }
        if(isDeleting && j==0){
            currentText=[]
            isDeleting=false;
            i++
            if(i==texts.length){
                i=0
            }
        }
    }
    const speedUp=Math.random()*(80-50)+50
    const normalSpeed=Math.random()*(300-200)+200
    const time=isEnd ? 1500: isDeleting ? speedUp :normalSpeed 
    setTimeout(type, time)
}
type();