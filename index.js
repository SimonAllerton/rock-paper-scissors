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
console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('You tied!')
    }   else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log('You Win!')
        } else {
            console.log('You Lost!')
        }
}

// Prompts user to input a selection
let playerSelection = prompt('Choose rock, paper, or scissors: ')
console.log(playerSelection);

// Runs the playRound Function
playRound(playerSelection, computerSelection);