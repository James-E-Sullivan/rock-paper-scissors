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
    
    // for testing
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);

    // if user inputs an invalid string, playRound will restart
    if (playerSelection !== "rock" && 
        playerSelection !== "paper" && 
        playerSelection !== "scissors") {
        console.log("Invalid player input. Try again.");
        return playRound(getPlayerSelection());
    } else if (playerSelection === computerSelection) {
        console.log(`${playerSelection} ties with ${computerSelection}. Play again!`);
        return playRound(getPlayerSelection());
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "Rock beats scissors! You win!";
        } else {
            return "Rock loses to paper. You lose!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Paper beats rock! You win!";
        } else {
            return "Paper loses to scissors. You lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "Scissors beats paper! You win!";
        } else {
            return "Scissors loses to rock. You lose!";
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
    })
})

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(playRound());
    }
}