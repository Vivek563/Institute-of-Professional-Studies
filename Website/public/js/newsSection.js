

function dialogFiller(c){
    let c_object = JSON.parse(c);
    document.getElementById("reusableDialogContent").innerHTML = `<h2>${c_object.title}</h2><p>${c_object.description}</p><a href="${c_object.pdfUrl}" target="_blank">oo</a>`;
  }
  
  document.querySelectorAll(".dialogTrigger").forEach( item => { 
      item.addEventListener("click",  () => {
        document.querySelector("#reusableDialog").showModal();
  })
  })
  