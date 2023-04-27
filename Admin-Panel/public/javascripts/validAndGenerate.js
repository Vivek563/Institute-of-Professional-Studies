(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to 
    const forms = document.querySelectorAll('.validated-form')

    // Loop over them and prevent submission
    Array.from(forms)
        .forEach(function (form){
            form.addEventListener('submit', function (event){
                if(!form.checkValidity()){
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

//----------------------------- navbar sub-items  generate & remove -----------------------------------------------


let n = 0;
let first = true;

function initializeN(nu){
    if(nu)
    {
        if(first){
            n=parseInt(nu);
            first = false;
        }
    }
}


function createSubItem(n){
    const subItem = document.createElement("div");
    subItem.innerHTML=
    `<label class="form-label" for="subItems">Sub Item ${n+1} </label>
    <input class="form-control" type="text" id="subItems" name="navbarItem[subItems][${n}]" novalidate>
    <label class="form-label" for="subLinks">Sub Link ${n+1}</label>
    <input class="form-control" type="text" id="subLinks" name="navbarItem[subLinks][${n}]" novalidate>`;
    return subItem;
}
const el = document.querySelector('.genBtn');
if(el){
el.addEventListener('click', function (){   
    document.body.querySelector('.subItems').appendChild(createSubItem(n));
    n++;
})
}
const eln = document.querySelector('.remBtn');
if(eln){
eln.addEventListener('click', function (){   
    const subItems = document.querySelector('.subItems');
    if(subItems.childElementCount)
    {
    subItems.removeChild(subItems.lastElementChild);
    n--;
    }
})
}