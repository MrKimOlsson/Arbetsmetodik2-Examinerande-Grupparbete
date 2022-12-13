// MOBILE NAVIGATION

const menu = document.querySelector(".menuMobile");
const navbar = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");


function toggleMenu() {

  if (navbar.classList.contains("showMenu")) {
    navbar.classList.toggle("change");
    navbar.classList.toggle("showMenu");

  } else {
    navbar.classList.toggle("change");
    navbar.classList.toggle("showMenu");
  }
}

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

hamburger.addEventListener("click", toggleMenu);



  function changeHamburger(x) {
    x.classList.toggle("change");
  }
