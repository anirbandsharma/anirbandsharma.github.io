

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
    

    tl.fromTo('.slide', {y:0}, {y:-400});

    tlText.fromTo('.text', {x:0}, {x:-800});
    tlPhoto.fromTo('.photo', {x:0}, {x:800});
    
    tl2.fromTo(
        '.logo', 
        {scale:4},
        {scale:1, top:"0.6rem", left:"5rem", x: '50%', y: '50%'}
        );

    

//tlN.fromTo('.nav', {background: "transparent", color: "white"}, {background:"#ffffffea", color: "black"});


// nav-mobile
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        document.querySelector(".slide-m").innerText = "Anirban"
    } 
}

var menuBtn = document.getElementById("menu");
var menuOpen = document.getElementById("menu-open");

menuBtn.onclick = function () {
    menuOpen.style.display = "flex";
    document.body.style.overflow = "hidden";
}

window.onclick = function (event) {
    if (event.target == menuOpen) {
        menuOpen.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

/* Close */
function closeN() {
    menuOpen.style.display = "none";
    document.body.style.overflow = "auto";
  }
