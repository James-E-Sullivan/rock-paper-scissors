function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else return "Scissors"
}

function getPlayerSelection() {
    return prompt("Please enter Rock, Paper, or Scissors.").trim();
}

function playRound(playerSelection,
                   computerSelection=getComputerChoice()) {


    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let roundResult;  // variable for storing result of round
    
    // for testing
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);

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
            roundResultDiv.textContent = `${playerSelection} beats ${computerSelection}! You win!`;
            break;
        case 'loss':
            roundResultDiv.textContent = `${playerSelection} loses to ${computerSelection}. You lose!`;
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

function game(roundsToWin=5) {

    // initialize scores to 0 and resets scores on page to 0
    let playerScore = 0;
    let computerScore = 0;
    playerScoreDiv.textContent = playerScore;
    compScoreDiv.textContent = computerScore;

    let playerResult;
    let gameResult;

    gameButtons.forEach((gameButton) => {
        gameButton.addEventListener('click', () => {

            if (playerScore < roundsToWin && computerScore < roundsToWin){
                playerResult = playRound(gameButton.id);
                if (playerResult === 'win') {
                    playerScore++;
                    playerScoreDiv.textContent = playerScore;
    
                    if (playerScore >= roundsToWin) { // check score
                        gameResultDiv.textContent = "You Win!";
                        gameButton.removeEventListener('click', () => {});
                        gameResultDiv.appendChild(playAgainButton);
                        playAgainButton.addEventListener('click', () => {
                            gameResultDiv.removeChild(playAgainButton);
                            game();
                        });
                    }
                } else if (playerResult === 'loss') {
                    computerScore++;
                    compScoreDiv.textContent = computerScore;
                    
                    if (computerScore >= roundsToWin) { // check score
                        gameResultDiv.textContent = "You Lose!";
                        gameButton.removeEventListener('click', () => {});
                        gameResultDiv.appendChild(playAgainButton);
                        playAgainButton.addEventListener('click', () => {
                            gameResultDiv.removeChild(playAgainButton);
                            game();
                        });
                    } 
                }
            } 
        });
    });

    
    



}

// game plays once at page load
game();