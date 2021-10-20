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


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: "0%",
        end: "300%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

tl.fromTo('.slide', {y:0}, {y:-400});

tl2.fromTo(
    '.logo', 
    {scale:5, boder: "solid 2px hsla(0, 0%, 0%, 1)"},
    {scale:1, top:"0.6rem", left:"5rem", x: '50%', y: '50%', border: "solid 2px hsla(0, 0%, 0%, 0)", padding: "0"}
    );

tlN.fromTo('.nav', {background: "transparent", color: "white"}, {background:"#ffffffea", color: "black"});
