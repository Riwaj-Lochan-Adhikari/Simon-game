let userClickedPattern = [];
let gamePattern  = [];

const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
 let randomNumber = Math.floor(Math.random() * 4);
 console.log(randomNumber);
  return randomNumber;
};

let randomChosenColour = buttonColours[nextSequence()];


  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour);
  $('.btn').on('click', function () {
    $(this)
      .stop(true, true)       // clear any running animation
      .fadeTo(100, 0.2)       // dim quickly
      .fadeTo(100, 1)         // back to full
      .fadeTo(100, 0.2)
      .fadeTo(100, 1);        // two flashes
  });
  
// Map each color to its sound file
const sounds = {
  red: new Audio("sounds/red.mp3"),
  green: new Audio("sounds/green.mp3"),
  blue: new Audio("sounds/blue.mp3"),
  yellow: new Audio("sounds/yellow.mp3"),
};

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
   
    const color = btn.id;   // reads data-color="..."
    const sound = sounds[color];
    

    if (sound) {
      sound.currentTime = 0;           // restart if already playing
      sound.play();
    }
  });
});

$(".btn").on("click", function () {
  const userChosenColour = $(this).attr("id");   // "red", "blue", etc.
  console.log(userChosenColour);
   userClickedPattern.push(userChosenColour);
});

function playSound(name) {
   let randomNumber = Math.floor(Math.random() * 4);
 console.log(randomNumber);
  return randomNumber;
}