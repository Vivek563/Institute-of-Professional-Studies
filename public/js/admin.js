function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var clip = document.getElementById("myClip");
    clip.innerHTML = "<b>Copied: </b>" + copyText.value;
  }
  
  function outFunc() {
    var clip = document.getElementById("myClip");
    clip.innerHTML = "Copy?";
  }

 