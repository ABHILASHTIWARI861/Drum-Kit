//document.querySelector("button").addEventListener("click",funk)
//function funk(){
//  alert("you clicked me");
//}
// Above(named function) is correct but prefer anonymous concet(below).
//var length=document.querySelectorAll(".pr").length;
//for(var i=0;i<length;i++) {
//document.querySelectorAll("button")[i].addEventListener("click",function(){ //Anonemous concept.
//this.style.color="white";
//})
//}
//when i click on mouse sound will come out.(below code)
var res = document.querySelectorAll(".pr").length;
for (var i = 0; i < res; i++) {
  document
    .querySelectorAll(".pr")[i].addEventListener("click", function (event) {
      var select = this.innerHTML;
      sachin(select);
      last_dekho(select);
    });
}

//when pressing keyboard key ,sound will come out.(below code)
document.addEventListener("keypress", function (event) {
  var a = event.key.toLowerCase();
  sachin(a);
  last_dekho(a);
});

//when i click on mouse sound will come out.(below code)

function sachin(select) {
  switch (select) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;
    default:
  }
}
function last_dekho(reso) {
  var ans = document.querySelector("#" + reso);
  ans.classList.add("pressed");
  setTimeout(function () {
    ans.classList.remove("pressed");
  }, 100);
}
