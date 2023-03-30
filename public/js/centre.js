/*-----------------------------------------navbar section--------------------------------------------------------- */

const hamburger = document.querySelector(".mobile");
const mobileNavBar = document.querySelector(".mobile-list");

hamburger.addEventListener("click", () => {
  mobileNavBar.classList.toggle("show-navbar");
});

// window.onscroll = function () {
//   myFunction();
// };

/*---------------------------------centre's new section------------------------------------------*/

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const sideHeader = document.querySelector(".sideHeader");

menuOpen.addEventListener("click", () => {
  sideHeader.classList.add("display");
});

menuClose.addEventListener("click", () => {
  sideHeader.classList.remove("display");
});