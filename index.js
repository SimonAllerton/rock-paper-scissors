let playerScore = 0;
let computerScore = 0;

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
//console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    // if statement that evaluates your choice and the computer's choice
    if (playerSelection == ''){
        console.log('Wow there buddy! You need to enter a valid selection.')
        return;
    } else if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        console.log(`Seriously?! ${playerSelection} is not rock, paper, or scissors.`)
        return;
    } else if (playerSelection === computerSelection) {
        console.log(`You tied! You both played ${playerSelection}.`)
        return;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
        return playerScore += 1;
    } else {
            console.log(`You Lost! ${computerSelection} beats ${playerSelection}.`)
            return computerScore += 1;
    }
}


// !! This function NEEDS to track the score 
// and declare a winner and looser at the end of the game.

function game(){
    for (let i = 0; i < 5; i++) {
        let input = prompt('Choose rock, paper, or scissors: ');
        let playerSelection = input.toLowerCase(); // Makes user input case sensitive

        playRound(playerSelection, computerSelection);

        console.log(`Player Score = ${playerScore}`);
        console.log(`Computer Score = ${computerScore}`);

        if (i === 5){
            break;
        }
       if (playerScore > computerScore) {
            console.log('You Won!')
            return 1;
        } else {
            console.log('You Lost!')
            return 0;
        }
    }
};

game();



