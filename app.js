

// nav-mobile
var myNav = document.getElementById('nav');
var photo = document.getElementById('photo');
var logo = document.getElementById('logo');

var menuBtn = document.getElementById("menu");
var menuOpen = document.getElementById("menu-open");

window.onscroll = function () { 
    "use strict";
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");

            menuOpen.style.color = "black";
            menuOpen.style.textShadow = "none";
        } 
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");

            menuOpen.style.color = "white";
            menuOpen.style.textShadow = "0 0 3px rgb(0, 0, 0)";
        }
    } 


  menuBtn.onclick = function () {
    menuOpen.style.display = "flex";
    document.body.style.overflow = "hidden";
    document.getElementById("nav").style.padding = "0";
  };

  window.onclick = function (event) {
    if (event.target == menuOpen) {
      menuOpen.style.display = "none";
      document.body.style.overflow = "auto";
      myNav.style.padding = "1rem 1rem";
    }
  };

  /* Close */
  function closeN() {
    if ($(window).width() < 600) {
    menuOpen.style.display = "none";
    document.body.style.overflow = "auto";
    myNav.style.padding = "1rem 1rem";
    }
  }
