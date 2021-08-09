//Create function that randomly returns rock, paper or scissors.
const computerSelection = computerPlay();
const playerSelection = playerPlay();
function computerPlay() {
    let game = ['rock', 'paper', 'scissors']
    let computerPlay = game[Math.floor(Math.random()*game.length)];
    return computerPlay;
}
//Create function that takes player input of rock, paper or scissors.
function playerPlay() {
   let player = prompt('Rock, paper or scissors?').toLowerCase()
    return player;
}

//Create function that plays 5 rounds of rock paper scissors and declares the winner with most won rounds.
function game(playerSelection, computerSelection) {
    let playerScore = 0
    let computerScore = 0

    let i = 0;
    for (i = 0; i < 5; i++) {
        if (playerSelection === null || playerSelection === '') {
            return 'Please enter a value';
        } else if (playerSelection === computerSelection) {
            return 'Draw';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper' 
        || playerSelection === 'paper' && computerSelection === 'rock' 
        || playerSelection === 'rock' && computerSelection === 'scissors') {
           playerScore++
            return 'You win!';
        } else if (playerSelection === 'rock' && computerSelection === 'paper'
        || playerSelection === 'scissors' && computerSelection === 'rock'
        || playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++
            return 'You lose!';
        } else{
            return 'Something went wrong.';
        }
    }
    if(playerScore > computerScore) {
        return 'You won!'
    }else if(computerScore > playerScore) {
            return 'You lost!'
        
    }else if(playerScore === computerScore){
        return "It's a draw!"
    }else{
        return 'Something went wrong'
    }
        }

console.log(game(playerSelection, computerSelection))