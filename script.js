// MOBILE NAVIGATION

const menu = document.querySelector(".menuMobile");
const navbar = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");

const acc = document.getElementsByClassName("accordion");
let i;

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

  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
    this.classList.toggle("active");
    this.classList.toggle("rotatePlus");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } 
    else {
      panel.style.display = "block";
    }
  });
}
