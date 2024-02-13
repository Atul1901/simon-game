// alert("yes its running");
var UserClickedPattern = [];

var iCnt = 0;

var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];

// var randomNum = nextSequence();

// var randomChoosenColor = buttonColor[randomNum];

// console.log("randNum", randomNum);

// console.log(gamePattern);
// console.log(randomChoosenColor);
var randomChoosenColor;
var a = "#" + randomChoosenColor;
//function for creating the random number
function nextSequence() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);
  randomChoosenColor = buttonColor[randomNumber];
  // console.log("rand num in fun ", randomNumber);
  gamePattern.push(randomChoosenColor);
  $("#" + randomChoosenColor)
    .fadeOut(-1000)
    .fadeIn();
  playSound(randomChoosenColor);
  // animatePress(randomChoosenColor);

  //changing the title to level 0;
  $("h1").text("Level: " + level);
  level++;
  // return randomNumber;
  console.log("game pattern", gamePattern);

  // console.log(randomChoosenColor);
}

// nextSequence();

// var audio = new Audio("/sounds/blue.mp3");
// console.log("colorid", a);
// $(a).click(function () {
//   $(a).fadeOut(-1000).fadeIn();
//   // playSound(randomChoosenColor);
// });

// animating and sound for the next key to press

// function nextPress() {
//   $(a).fadeOut(-1000).fadeIn();
//   playSound(randomChoosenColor);
// }
// nextPress();

var delayMillisecond = 100;
var clickCount = 0;
var isFirstTIme = true;
var level = 1;

// animating and sound for the key pressed
var userChosenColour;
$(".btn").on("click", function () {
  userChosenColour = this.id;
  // console.log(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // checkAnswer(userChosenColour);
  UserClickedPattern.push(userChosenColour);
  checkAnswer(userChosenColour);
  // console.log("user clicked pattern", UserClickedPattern);
});

$(document).ready(() => {
  $(document).keypress(function (event) {
    if (isFirstTIme) {
      console.log("game started");
      nextSequence();
    }

    isFirstTIme = false;
  });
});

// UserClickedPattern.push(userChosenColour);
// console.log(UserClickedPattern);

function playSound(name) {
  switch (name) {
    case "green":
      // $("#green").fadeOut(-1000).fadeIn();
      var audio = new Audio("/sounds/green.mp3");
      audio.play();
      break;

    case "blue":
      // $("#blue").fadeOut(-1000).fadeIn();
      var audio = new Audio("/sounds/blue.mp3");
      audio.play();
      break;

    case "red":
      // $("#red").fadeOut(-1000).fadeIn();
      var audio = new Audio("/sounds/red.mp3");
      audio.play();
      break;

    case "yellow":
      // $("#yellow").fadeOut(-1000).fadeIn();
      var audio = new Audio("/sounds/yellow.mp3");
      audio.play();
      break;

    default:
      var audio = new Audio("/sounds/wrong.mp3");
      audio.play();
  }
}

// $("btn").on("click", function () {
//   $("btn").addClass("pressed");
// });

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  // console.log(currentColor);
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
    // console.log("hi");
  }, delayMillisecond);
  // console.log("hi");
}

// setTimeout(function () {
//   animatePress();
// }, delayMillisecond);

//check answer

const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

function checkAnswer(currentColor) {
  console.log("current color >> ", currentColor);
  if (gamePattern[iCnt] === currentColor) {
    iCnt++;
  } else {
    $("h1").text("game over");
    // alert("har gaya!!");
    // iCnt = 0;
  }

  if (iCnt === gamePattern.length) {
    console.log("game won,,,,,");
    iCnt = 0;

    setTimeout(() => {
      nextSequence();
    }, 1000);
  }

  // if (userChosenColour == randomChoosenColor) {
  //   console.log("sucess");
  //   setTimeout(() => {
  //     nextSequence();
  //   }, 1000);
  // } else {
  //   console.log("wrong");
  // }
}

//making the game pattern
// setTimeout(() => {
//   nextSequence();
// }, 1000);
