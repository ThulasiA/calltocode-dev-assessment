document.getElementById('logo').addEventListener('click', function () {
  //IF/ELSE to  check the logo
  if(this.textContent === "facebook") {
    this.textContent = "Thulasi";
  } else {
    this.textContent = "facebook";
  }  
});