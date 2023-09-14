function getComputerChoice() {
    // Get random number between 0 and 2
    let randomChoice = Math.floor(Math.random() * 3);

    // Return the corresponding choice
    switch (randomChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Runs getComputerChoice function
let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`You tied! You both played ${playerSelection}.`)
    }   else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
        } else {
            console.log(`You Lost! ${computerSelection} beats ${playerSelection}.`)
        }
}

// Prompts user to input a selection
let playerSelection = prompt('Choose rock, paper, or scissors: ')

// Runs the playRound Function
playRound(playerSelection, computerSelection);