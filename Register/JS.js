function openNav() {
    document.getElementById("mySidenav").style.width="250px";
}
function closeNav(){
    document.getElementById("mySidenav").style.width="0";
}

var drodown= document.getElementsByClassName("property-btn");
var i;
for(i=0; i< drodown.length; i++){
    drodown[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var dropdownContent=
        this.nextElementSibling;
        if(dropdownContent.style.display==="block"){
            dropdownContent.style.display="none";
        } else {
            dropdownContent.style.display="block";
        }
    });
}
// کارتابل
var cartbot = document.getElementsByClassName("cartbot-btn");
var i;

for (i = 0; i < cartbot.length; i++) {
    cartbot[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var cartbotContent = this.nextElementSibling;
  if (cartbotContent.style.display === "block") {
    cartbotContent.style.display = "none";
  } else {
    cartbotContent.style.display = "block";
  }
  });
}

var duties = document.getElementsByClassName("duties-btn1");
var i;

for (i = 0; i < duties.length; i++) {
    duties[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var cartbotContent = this.nextElementSibling;
  if (cartbotContent.style.display === "block") {
    cartbotContent.style.display = "none";
  } else {
    cartbotContent.style.display = "block";
  }
  });
}