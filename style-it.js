document.body.style.backgroundColor="blue";


var parameters = document.getElementsByClassName("test-step-parameter-value");

function clickColor() {
  for (var x = 0; x < parameters.length; x++) {
       parameters[x].style.color=('red');
  }
}

clickColor();

var navBtns = ["mi_57_next-test-case","mi_51_prev-test-case"];
for (var x = 0; x < navBtns.length; x++) {
    document.getElementById(navBtns[x]).addEventListener("click", function(){
        clickColor();
      });
}




