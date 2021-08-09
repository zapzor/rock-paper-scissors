//Create function that randomly returns rock, paper or scissors.
const computerSelection = computerPlay();
const playerSelection = playerPlay();
const playerScore = 0
const computerScore = 0
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
//Create function that plays a round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return 'Please enter a value';
    }else if (playerSelection === computerSelection) {
        return 'Draw';
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'You win!';
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return 'You win!';
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You Win!';
    }else{
        return 'You lose!';
    }
} 
console.log(playRound(playerSelection, computerSelection, playerScore))
//Create function that plays 5 rounds of rock paper scissors and declares the winner with most won rounds.
function game(playerSelection, computerSelection) {
    let i = 0;
    for (i = 0; i < 5 ; i++) {
    playRound(playerSelection, computerSelection);
    console.log(i)
}
return game;
}