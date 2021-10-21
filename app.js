let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tlN = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tlText = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tlPhoto = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "80%",
        scrub: 1,
    },
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "500%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

const mediaQuery = window.matchMedia('(max-width: 600px)')
// Check if the media query is true
if (mediaQuery.matches) {
    tl.fromTo('.slide', {y:0}, {y:-400});

tlText.fromTo('.text', {x:0}, {x:-800});
tlPhoto.fromTo('.photo', {x:0}, {x:800});

tl2.fromTo(
    '.logo', 
    {scale:2},
    {scale:1, top:"0.6rem", left:"1rem", x: '50%', y: '50%'}
    );
}
else{

    tl.fromTo('.slide', {y:0}, {y:-400});

    tlText.fromTo('.text', {x:0}, {x:-800});
    tlPhoto.fromTo('.photo', {x:0}, {x:800});
    
    tl2.fromTo(
        '.logo', 
        {scale:4},
        {scale:1, top:"0.6rem", left:"5rem", x: '50%', y: '50%'}
        );
    
}
//tlN.fromTo('.nav', {background: "transparent", color: "white"}, {background:"#ffffffea", color: "black"});


// nav-mobile
var menuBtn = document.getElementById("menu");
var menuOpen = document.getElementById("menu-open");
var menuC1 = document.getElementById("menu-close1");
var menuC2 = document.getElementById("menu-close2");
var menuC3= document.getElementById("menu-close3");
var menuC4 = document.getElementById("menu-close4");

menuBtn.onclick = function () {
    menuOpen.style.display = "flex";
    document.body.style.overflow = "hidden";
}
menuC1.onclick = function () {
    menuOpen.style.display = "none";
    document.body.style.overflow = "auto";
}
window.onclick = function (event) {
    if (event.target == menuOpen) {
        menuOpen.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
