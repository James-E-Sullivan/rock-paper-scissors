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
        results.textContent = "Invalid input player. Try again."
        return "Invalid player input. Try again.";
    } else if (playerSelection === computerSelection) {
        results.textContent = `${playerSelection} ties with ${computerSelection}. Play again!`;
        return `${playerSelection} ties with ${computerSelection}. Play again!`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            results.textContent = "Rock beats scissors! You win!";
            return "Rock beats scissors! You win!";
        } else {
            results.textContent = "Rock loses to paper. You lose!";
            return "Rock loses to paper. You lose!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            results.textContent = "Paper beats rock! You win!";
            return "Paper beats rock! You win!";
        } else {
            results.textContent = "Paper loses to scissors. You lose!";
            return "Paper loses to scissors. You lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            results.textContent = "Scissors beats paper! You win!";
            return "Scissors beats paper! You win!";
        } else {
            results.textContent = "Scissors loses to rock. You lose!";
            return "Scissors loses to rock. You lose!";
        }
    }
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