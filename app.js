

// nav-mobile
var myNav = document.getElementById('nav');
var photo = document.getElementById('photo');
var logo = document.getElementById('logo');
var links = document.getElementById('links');

window.onscroll = function () { 
    "use strict";
        if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300 ) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");

            photo.style.right = "-100%";
            logo.style.left = "-100%";

            links.style.color = "black";
            links.style.textShadow = "none";
        } 
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");

            photo.style.right = "0";
            logo.style.left = "0";

            links.style.color = "white";
            links.style.textShadow = "0 0 3px rgb(0, 0, 0)";
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
