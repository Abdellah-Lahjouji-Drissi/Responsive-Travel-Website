const navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.getElementById("header");

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

window.addEventListener("scroll" , () => {
    this.scrollY >=50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");

})
