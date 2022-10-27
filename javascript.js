function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else return "Scissors"
}

function playRound(playerSelection,
                   computerSelection=getComputerChoice()) {

    console.log(playerSelection);
    
    let playerSelectionCapital = playerSelection;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    

    let roundResult;  // variable for storing result of round

    // set roundResult based on player and computer selection
    if (playerSelection !== "rock" && 
        playerSelection !== "paper" && 
        playerSelection !== "scissors") {
        roundResult = undefined;
    } else if (playerSelection === computerSelection) {
        roundResult = 'tie';
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            roundResult = 'win';
        } else {
            roundResult = 'loss';
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult = 'win';
        } else {
            roundResult = 'loss';
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            roundResult = 'win';
        } else {
            roundResult = 'loss';
        }
    }

    // update results div textContent based on roundResult
    switch(roundResult) {
        case 'win':
            roundResultDiv.textContent = `${playerSelectionCapital} beats ${computerSelection}! You win!`;
            break;
        case 'loss':
            roundResultDiv.textContent = `${playerSelectionCapital} loses to ${computerSelection}. You lose!`;
            break;
        case 'tie':
            roundResultDiv.textContent = `Both chose ${playerSelection}. It's a tie! Play again!`;
            break;
        case undefined:
            roundResultDiv.textContent = "Invalid player input. Try again.";
            break;
    }
    return roundResult;
}

// div for showing a text result of the round
const roundResultDiv = document.querySelector('.round-result');

// divs for showing player scores
const playerScoreDiv = document.querySelector('#player-score');
const compScoreDiv = document.querySelector('#comp-score');

// nodelist of game buttons
const gameButtons = document.querySelectorAll('.game-btn');

// div for showing the text result of the game (i.e., You Win! or You Lose!)
const gameResultDiv = document.querySelector('.game-result');

// playAgainButton used to start a new game after game is over
const playAgainButton = document.createElement('button');
playAgainButton.textContent = "Play Again?";
playAgainButton.classList.add("play-again-btn")

// adds playAgainButton, removes it and starts a new game when clicked
function addPlayAgainButton() {
    gameResultDiv.appendChild(playAgainButton);
    playAgainButton.addEventListener('click', () => {
        gameResultDiv.removeChild(playAgainButton);
        game();
    }, {once: true});
}

function game(roundsToWin=5) {

    // initialize scores to 0
    let playerScore = 0;
    let computerScore = 0;

    // set scores on page to 0 and remove previous game/round result
    playerScoreDiv.textContent = 0;
    compScoreDiv.textContent = 0;
    gameResultDiv.textContent = '';
    roundResultDiv.textContent = '';

    // add event listener for rock, paper, and scissor buttons
    gameButtons.forEach((gameButton) => {
        gameButton.addEventListener('click', function handler(e) {

            if (playerScore  < roundsToWin && computerScore < roundsToWin) {

                let playerResult = playRound(gameButton.getAttribute("data-id"));

                if (playerResult === 'win') {
                    playerScore++;
                    playerScoreDiv.textContent = playerScore;
    
                    if (playerScore >= roundsToWin) { // check score
                        gameResultDiv.textContent = "You Win!";
                        addPlayAgainButton(); // adds button to reset game
                    }
    
                } else if (playerResult === 'loss') {
                    computerScore++;
                    compScoreDiv.textContent = computerScore;
                    
                    if (computerScore >= roundsToWin) { // check score
                        gameResultDiv.textContent = "You Lose!";
                        addPlayAgainButton(); // adds button to reset game
                    } 
                }
            }
        });
    });
}

// game starts at page load
game();