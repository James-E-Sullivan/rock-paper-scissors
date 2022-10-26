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

function playRound(playerSelection=getPlayerSelection(),
                   computerSelection=getComputerChoice()) {


    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let roundResult;  // variable for storing result of round
    
    // for testing
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);

    // if user inputs an invalid string, playRound will restart
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

    switch(roundResult) {
        case 'win':
            results.textContent = `${playerSelection} beats ${computerSelection}! You win!`;
            break;
        case 'loss':
            results.textContent = `${playerSelection} loses to ${computerSelection}. You lose!`;
            break;
        case 'tie':
            results.textContent = `Both chose ${playerSelection}. It's a tie! Play again!`;
            break;
        case undefined:
            results.textContent = "Invalid player input. Try again.";
            break;
    }
    return roundResult;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id));
    })
})

const results = document.querySelector('.results');

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(playRound());
    }
}