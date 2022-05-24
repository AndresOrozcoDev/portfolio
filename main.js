// Variables
mybutton = document.getElementById("btnGoUp");
hamburgerMenu = document.querySelector('.hamburger');
inputSearch = document.getElementById("inputSearch");

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
  event.preventDefault();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const search = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(event.target.value);
  }
}

// Call function
hamburgerMenu.addEventListener('click', menuIsActive);
window.onscroll = function() {scrollFunction()};
inputSearch.addEventListener("keypress", search)

