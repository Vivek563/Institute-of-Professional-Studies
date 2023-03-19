const hamburger = document.querySelector(".mobile");
const mobileNavBar = document.querySelector(".mobile-list");

hamburger.addEventListener("click", () => {
  mobileNavBar.classList.toggle("show-navbar");
});

window.onscroll = function () {
  myFunction();
};


