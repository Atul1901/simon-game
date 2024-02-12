// alert("yes its running");
var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var randomNum = nextSequence();
var randomChoosenColor = buttonColor[randomNum];
// console.log("randNum", randomNum);
gamePattern.push(randomChoosenColor);
console.log(randomChoosenColor);

function nextSequence() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);
  // console.log("rand num in fun ", randomNumber);
  return randomNumber;
}
var a = "#" + randomChoosenColor;
console.log("colorid", a);
$(".container").click(function () {
  alert("hi");
});
