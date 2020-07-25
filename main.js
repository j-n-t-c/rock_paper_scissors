//variables
var rockImg = document.getElementById("rockimg")
var paperImg = document.getElementById("paperimg")
var scissorsImg = document.getElementById("scissorsimg")
//sets array of choices for computerPlay variable
var tools = ["Rock","Paper","Scissors"];
var userPlay
var computerPlay
var outcome
var playerScore = 0
var computerScore = 0

//onload
reset.style.visibility = "hidden"; //continue button hidden until game played
results.innerHTML = "PICK YOUR TOOL TO BATTLE!"; //sets results to instructions until game
playerscore.style.visibility = "hidden"; //hides score box until score
computerscore.style.visibility = "hidden";//

/*-------------------------------------
     FUNCTIONS
---------------------------------------*/

//user clicks picture to choose tool, fades non-choices, choice sets userPlay variable
const clickRock = function() {
    userPlay = 'Rock';
    document.getElementById("playerchoice").innerHTML = "You pick: ROCK!";
    rockImg.style.opacity = '1';
    paperImg.style.opacity = '0.2';
    scissorsImg.style.opacity = '0.2';}
const clickPaper = function() {
    userPlay = 'Paper';
    document.getElementById("playerchoice").innerHTML = "You pick: PAPER!";
    rockImg.style.opacity = '0.2';
    paperImg.style.opacity = '1';
    scissorsImg.style.opacity = '0.2';}
const clickScissors = function() {
    userPlay = 'Scissors';
    document.getElementById("playerchoice").innerHTML = "You pick: SCISSORS!";
    rockImg.style.opacity = '0.2';
    paperImg.style.opacity = '0.2';
    scissorsImg.style.opacity = '1';}
//onclick events for click functions, allows to be removed later?
const addClicks = function(){
    rockImg.addEventListener("click", clickRock);
    paperImg.addEventListener("click", clickPaper);
    scissorsImg.addEventListener("click", clickScissors);}

//runs clicks
    addClicks()

//removes clickability and assigning choices after rounds, run on PLAY
//also removes hover and cursor events
  const removeClicks = function() {
    rockImg.removeEventListener("click", clickRock);
    paperImg.removeEventListener("click", clickPaper);
    scissorsImg.removeEventListener("click", clickScissors);
    //const imgclass = document.getElementById('rockImg')
    rockimg.classList.remove('toolimg');
    paperimg.classList.remove('toolimg');
    scissorsimg.classList.remove('toolimg');
   }

  //function to stop game either side gets three points, hides poi
  const gameCounter = function() {
      if (playerScore >= 3) {
          outcome = "Victory is yours!";
          playgame.style.visibility = "hidden";
          reset.style.visibility = "hidden";
          rockimg.style.visibility = "hidden";
          paperimg.style.visibility = "hidden";
          scissorsimg.style.visibility = "hidden";
         playerchoice.style.visibility = "hidden";
         computerchoice.style.visibility = "hidden";
         results.style.transform="scale(4,4)"
      } else if (computerScore >= 3){
          outcome = "You have been defeated!";
          playgame.style.visibility = "hidden";
          reset.style.visibility = "hidden";
          rockimg.style.visibility = "hidden";
          paperimg.style.visibility = "hidden";
          scissorsimg.style.visibility = "hidden";
          playerchoice.style.visibility = "hidden";
         computerchoice.style.visibility = "hidden";
         results.style.transform="scale(4,4)";
      } 
    }

//chooses random choice for toolRandom variable and sets choice text
function computerPlay() {
    toolRandom = tools[Math.floor(Math.random() * tools.length)];
    document.getElementById("computerchoice").innerHTML = ('The computer picks: ' + toolRandom.toUpperCase() + '!');
    return toolRandom;
}

//can't use switch because only checks the one expression
//determines winner of game by comparing variables
function playRound() {
    document.getElementById("computerscore").innerHTML = "Computer points: " + computerScore;
    document.getElementById("playerscore").innerHTML = "Your points: " + playerScore;
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
        alert("You must pick your tool!");
        return;
    }
    computerPlay(); //gets computer choice
    userImage(); //changes left hand image to user choice at result
    computerImage(); //changes right image to user choice at result
    playRound(); //determines winner
    playgame.style.visibility = "hidden";
    reset.style.visibility = "visible";
    results.style.visibility = "visible";
    paperimg.style.visibility = "hidden";
    gameCounter();
    userPlay = void 0;
    toolRandom = void 0;
    document.getElementById("playgame").value = "PLAY";
    document.getElementById("results").innerHTML = outcome;
    playerscore.style.visibility = "visible";
    computerscore.style.visibility = "visible";
    removeClicks();
    });


//function to change images based on user choice
const userImage = function() {
    if (userPlay === 'Paper') {
        document.getElementById('rockimg').src = 'paper.png';
        rockImg.style.opacity = '1';
    } else if (userPlay === 'Scissors') {
        document.getElementById('rockimg').src = 'scissors.png';
        rockImg.style.opacity = '1';
    } else{ document.getElementById('rockimg').src = 'rock.png'; 
    rockImg.style.opacity = '1';}
}
//function to change images based on computer choice
    const computerImage = function() {
        if (toolRandom === 'Rock') {
            document.getElementById('scissorsimg').src = 'rock.png';
            scissorsImg.style.opacity = '1';
        } else if (toolRandom === 'Paper') {
            document.getElementById('scissorsimg').src = 'paper.png';
            scissorsImg.style.opacity = '1';
        } else{ document.getElementById('scissorsimg').src = 'scissors.png';
        scissorsImg.style.opacity = '1';}
    }

//function to reset back to three main image spacing
    const resetImage = function() {
        document.getElementById('rockimg').src = 'rock.png';
        document.getElementById('paperimg').src = 'paper.png';
        document.getElementById('scissorsimg').src = 'scissors.png';
        rockImg.style.opacity = '1';
        paperImg.style.opacity = '1';
        scissorsImg.style.opacity = '1';
    }

    //resets game, shows play button again, resets choices and variables
document.getElementById("reset").addEventListener("click", function() {
    playgame.style.visibility = "visible";
    results.innerHTML = "CHOOSE YOUR TOOL TO BATTLE!";
    document.getElementById("playgame").value = "PLAY";
    reset.style.visibility = "hidden";
    rockimg.style.visibility = "visible";
    paperimg.style.visibility = "visible";
    scissorsimg.style.visibility = "visible";
    document.getElementById("playerchoice").innerHTML = "You pick: ";
    document.getElementById("computerchoice").innerHTML = "The computer picks: ";
    resetImage();
    addClicks();
    rockimg.classList.add('toolimg');
    paperimg.classList.add('toolimg');
    scissorsimg.classList.add('toolimg');
    });