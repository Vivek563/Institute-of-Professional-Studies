
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
});
});
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

// View more btn
function showHide(btnID, textID){
var showMoreText =
            document.getElementById(textID);

var buttonText =
            document.getElementById(btnID);

buttonText.onclick = function() {
    if(buttonText.innerText === "View more"){
        showMoreText.style.display = "inline";
        buttonText.innerText = "View less";
    }
    else {
        showMoreText.style.display = "none";
        buttonText.innerText = "View more";
    }
}

}

// <--------------------------------- reusable  Dialog  --------------------------------------------->

function dialogFiller(c){
    let c_object = JSON.parse(c);
    document.getElementById("reusableDialogContent").innerHTML = `<h2>${c_object.title}</h2><p>${c_object.description}</p>`;
  }
  
  document.querySelectorAll(".dialogTrigger").forEach( item => { 
      item.addEventListener("click",  () => {
        document.querySelector("#reusableDialog").showModal();
  })
  })
  