
let slideIndex = 0;
let id = '';
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(id)
  showSlides(slideIndex += n - 1);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";
   
  id = setTimeout( showSlides, 5000); // Change image every 2 seconds
 
}
