const menu1=document.querySelector(".dropdown-menu");
const icon1=document.querySelector(".icon1");
const icon2=document.querySelector(".icon2");
const menu2=document.querySelector(".menu2");
const nav=document.querySelector(".menu");

icon1.addEventListener("mouseover", () => {
    menu1.style.display = "block";
});

icon1.addEventListener("mouseout", () => {
    menu1.style.display = "none";
});

icon2.addEventListener("mouseover", () => {
    menu2.style.display = "block";
});

icon2.addEventListener("mouseout", () => {
    menu2.style.display = "none";
});

const iconMob1=document.querySelector(".icon-mob1");
const iconMob2=document.querySelector(".icon-mob2");
const menuM1=document.querySelector(".mob1");
const menuM2=document.querySelector(".mob2");
const img=document.querySelector(".hero-mob");

iconMob1.addEventListener("click", function (){
    if (menuM1.style.display === 'none') {
        menuM1.style.display = 'block';

    } else {
        menuM1.style.display = 'none';
    }
})

iconMob2.addEventListener('click', function() {
    // If the menu is hidden, show it, otherwise hide it
    if (menuM2.style.display === 'none') {
        menuM2.style.display = 'block';
    } else {
        menuM2.style.display = 'none';
    }
});

const sideM=document.querySelector(".menu-mobile");
const open=document.querySelector(".menu-open");
const close=document.querySelector(".close");

open.addEventListener('click', function() {
    // If the menu is hidden, show it, otherwise hide it
    if (sideM.style.display === 'none') {
        sideM.style.display = 'block';
        document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
        img.style.filter = "brightness(50%)";

    } else {
        sideM.style.display = 'none';
        sideM.style.display = 'none'
    }
});

close.addEventListener("click", function (){
    if (sideM.style.display === 'block') {
        sideM.style.display = 'none';
        document.body.style.backgroundColor = "white";
        img.style.filter = "brightness(100%)";
    }
});