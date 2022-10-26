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

const roundResultDiv = document.querySelector('.round-result');
const playerScoreDiv = document.querySelector('#player-score');
const compScoreDiv = document.querySelector('#comp-score');
const buttons = document.querySelectorAll('button');
const gameResultDiv = document.querySelector('.game-result');

function game(roundsToWin=5) {

    // initialize scores to 0
    let playerScore = 0;
    let computerScore = 0;

    let playerResult;
    let gameResult;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            if (playerScore < roundsToWin && computerScore < roundsToWin) {
                playerResult = playRound(button.id);

                if (playerResult === 'win') {
                    playerScore++;
                    playerScoreDiv.textContent = playerScore;

                    if (playerScore >= roundsToWin) { // check score
                        gameResultDiv.textContent = "You Win!";
                        return;
                    }
                } else if (playerResult === 'loss') {
                    computerScore++;
                    compScoreDiv.textContent = computerScore;
                    
                    if (computerScore >= roundsToWin) { // check score
                        gameResultDiv.textContent = "You Lose!";
                        return;
                    } 
                }

            }
        })
    })

}

// game plays once at page load
game();