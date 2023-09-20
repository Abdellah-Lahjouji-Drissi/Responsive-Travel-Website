const navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav-link");

if(navToggle){
    navToggle.addEventListener( "click" , ()=> {
        navMenu.classList.add("display-nav");
    })
}


if(navClose){
    navClose.addEventListener( "click" , ()=> {
        navMenu.classList.remove("display-nav");
    })
}


navLinks.forEach((link) => {
    link.addEventListener("click" , ()=>{
        navMenu.classList.remove("display-nav");
    })
})
