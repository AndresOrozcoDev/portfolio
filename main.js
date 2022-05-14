// Variables
mybutton = document.getElementById("btnGoUp");
hamburgerMenu = document.querySelector('.hamburger');

// Function for active Hamburguer Menu.
const menuIsActive = () => { hamburgerMenu.classList.toggle('active') };

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Call function
hamburgerMenu.addEventListener('click', menuIsActive);
window.onscroll = function() {scrollFunction()};

