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