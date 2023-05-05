

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
  