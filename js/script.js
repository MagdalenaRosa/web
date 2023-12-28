'use strict';

const menu=document.querySelector('.top .material-icons');
const close = document.querySelector('nav .material-icons');

const nav=document.querySelector('nav');

menu.addEventListener('click',()=>{
    nav.classList.add('nav-display-block');
});

close.addEventListener('click',()=>{
    nav.classList.remove('nav-display-block');
});