/*-----------------------------------------navbar section--------------------------------------------------------- */

const hamburger = document.querySelector(".mobile");
const mobileNavBar = document.querySelector(".mobile-list");

hamburger.addEventListener("click", () => {
  mobileNavBar.classList.toggle("show-navbar");
});


//----------- hero section------------------------


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
   
  id = setTimeout( showSlides, 5000); // Change image every 5 seconds
 
}


//------------- news section-----------------

function dialogFiller(c){
    let c_object = JSON.parse(c);

    let pdfUrl = '';

    if(c_object.pdfUrl){
      pdfUrl = `<embed
      src='/uploads/documents/${c_object.pdfUrl}'
      type='application/pdf'
      frameBorder='0'
      scrolling='auto'
      height='100%'
      width='100%'
      ></embed>`
    }
     let title = `<h2>${c_object.title}</h2>`;
     let description = `<p>${c_object.description}</p>`;

    document.getElementById("reusableDialogContent").innerHTML = title + description + pdfUrl;
  }
  
  document.querySelectorAll(".dialogTrigger").forEach( item => { 
      item.addEventListener("click",  () => {
        document.querySelector("#reusableDialog").showModal();
  })
  })

//-----------   counter section----------------

const counters = document.querySelectorAll(".counter");


counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});