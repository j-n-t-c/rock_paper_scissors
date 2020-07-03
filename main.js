
//hides reset button until game is played
reset.style.visibility = "hidden";

//sets array of choices for computerPlay variable
var tools = ["Rock","Paper","Scissors"];
//variables
var userPlay
var computerPlay
var outcome
var playerScore = 0
var computerScore = 0

//user clicks picture to choose tool, choice sets userPlay variable
document.getElementById("rockimg").addEventListener("click", function() {
    userPlay = 'Rock';
    document.getElementById("playerchoice").innerHTML = "You have chosen: ROCK!";
  });
document.getElementById("paperimg").addEventListener("click", function() {
    userPlay = 'Paper';
    document.getElementById("playerchoice").innerHTML = "You have chosen: PAPER!";
  });
document.getElementById("scissorsimg").addEventListener("click", function() {
    userPlay = 'Scissors';
    document.getElementById("playerchoice").innerHTML = "You have chosen: SCISSORS!";
  });

  //function to stop game either side gets three points
  function gameCounter() {
      if (playerScore >= 3) {
          outcome = "Victory is yours!";
          playgame.style.visibility = "hidden";
          reset.style.visibility = "hidden";
          computerchoice.style.visibility = "hidden";
          playerchoice.style.visibility = "hidden";
      } else if (computerScore >= 3){
          outcome = "You have been defeated!";
          playgame.style.visibility = "hidden";
          reset.style.visibility = "hidden";
          playerchoice.style.visibility = "hidden";
          computerchoice.style.visibility = "hidden";
      } 
    }

//chooses random choice for toolRandom variable and sets choice text
function computerPlay() {
    toolRandom = tools[Math.floor(Math.random() * tools.length)];
    document.getElementById("computerchoice").innerHTML = ('Your opponent has chosen: ' + toolRandom.toUpperCase() + '!');
    return toolRandom;
}

//can't use switch because only checks the one expression
//determines winner of game by comparing variables
function playRound() {
            //tie
    if ((userPlay === 'Rock' && toolRandom === 'Rock') || (userPlay === 'Paper' && toolRandom === 'Paper') 
             || (userPlay === 'Scissors' && toolRandom === 'Scissors')) { 
             outcome = 'It\'s a tie! Try again.';
             return outcome;
            //user wins
    } else if (userPlay === 'Rock' && toolRandom === 'Scissors') { 
             outcome = 'Rock beats scissors! You win this round!';
             playerScore += 1;
             document.getElementById("playerscore").innerHTML = "Your points: " + playerScore;
             return outcome;
    } else if (userPlay === 'Paper' && toolRandom === 'Rock') { 
             outcome = 'Paper beats rock! You win this round!';
             playerScore += 1;
             document.getElementById("playerscore").innerHTML = "Your points: " + playerScore;
             return outcome;
    } else if (userPlay === 'Scissors' && toolRandom === 'Paper') { 
             outcome = 'Scissors beat paper! You win this round!';
             playerScore += 1;
             document.getElementById("playerscore").innerHTML = "Your points: " + playerScore;
             return outcome;
    
             //computer wins
    } else if (toolRandom === 'Rock' && userPlay === 'Scissors') { 
            outcome = 'Rock beats scissors! You lose this round!';
            computerScore += 1;
            document.getElementById("computerscore").innerHTML = "Computer points: " + computerScore;
            return outcome;
    } else if (toolRandom === 'Paper' && userPlay === 'Rock') { 
            outcome = 'Paper beats rock! You lose this round!';
            computerScore += 1;
            document.getElementById("computerscore").innerHTML = "Computer points: " + computerScore;
            return outcome;
    } else (toolRandom === 'Scissors' && userPlay === 'Paper')  
            outcome = 'Scissors beat paper! You lose this round!';
            computerScore += 1;
            document.getElementById("computerscore").innerHTML = "Computer points: " + computerScore;
            return outcome;      
}


    //starts game when PLAY is clicked, runs game function and changes buttons
document.getElementById("playgame").addEventListener("click", function() {
    if (userPlay === undefined) {
        alert("You must choose your tool!");
        return;
    }
    computerPlay();
    playRound();
    playgame.style.visibility = "hidden";
    reset.style.visibility = "visible";
    results.style.visibility = "visible";
    instructions.style.visibility = "hidden";
    rockimg.style.visibility = "hidden";
    paperimg.style.visibility = "hidden";
    scissorsimg.style.visibility = "hidden";
    gameCounter();
    userPlay = void 0;
    toolRandom = void 0;
    document.getElementById("playgame").value = "PLAY AGAIN!";
    document.getElementById("results").innerHTML = outcome;
    
    });

    //resets game, shows play button again, resets choices and variables
document.getElementById("reset").addEventListener("click", function() {
    playgame.style.visibility = "visible";
    document.getElementById("playgame").value = "PLAY AGAIN!";
    reset.style.visibility = "hidden";
    results.style.visibility = "hidden";
    instructions.style.visibility = "visible";
    rockimg.style.visibility = "visible";
    paperimg.style.visibility = "visible";
    scissorsimg.style.visibility = "visible";
    document.getElementById("playerchoice").innerHTML = "You have chosen: ";
    document.getElementById("computerchoice").innerHTML = "Your opponent has chosen: ";
    });