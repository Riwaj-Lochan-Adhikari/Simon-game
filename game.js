let userClickedPattern = [];
let gamePattern  = [];
let buttonColours = ["red", "blue", "green", "yellow"];
var started = false;

let level = 0;
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


function nextSequence(){
 level++;
  $("#level-title").text("Level " + level);
 let randomNumber = Math.floor(Math.random() * 4);

  
  
 
  
    
    let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour);
   return randomNumber;
};




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

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  animatePress(userChosenColor);
});

$(document).on("click", function () {

  $("#level-title").text("Level " + level);
    nextSequence();
});



