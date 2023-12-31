const navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.getElementById("header");
const scrollUp = document.getElementById("scrollup");

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
});

// blur Header

window.addEventListener("scroll" , () => {
    this.scrollY >=50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");

});


// display scrollup

window.addEventListener("scroll" , ()=>{
    this.scrollY >= 350 ? scrollUp.classList.add("display-scrollup") : 
    scrollUp.classList.remove("display-scrollup");
})

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 3000,
    delay:400,

})

sr.reveal(`.home-content , .explore-data , .explore-user , .footer-container`)
sr.reveal(`.home-card` , {delay : 600 , distance:'100px' , interval:100})
sr.reveal(`.about-data , .join-image` , {origin:'right'})
sr.reveal(`.about-image , .join-data` , {origin:'left'})
sr.reveal(`.popular-card` , {interval:200})



