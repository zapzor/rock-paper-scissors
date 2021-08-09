//Create function that randomly returns rock, paper or scissors.
const computerSelection = computerPlay();
const playerSelection = playerPlay();
function computerPlay() {
    let game = ['Rock', 'Paper', 'Scissors']
    let computerPlay = game[Math.floor(Math.random()*game.length)];
    return computerPlay;
}
//Create function that takes player input of rock, paper or scissors.
function playerPlay() {
   let player = prompt('Rock, paper or scissors?');
    return player;
}
//Create function that plays a round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
    let playerScore = 0
    let computerScore = 0
    if (playerSelection === computerSelection) {
        return 'Draw';
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore++
        return 'You win!';
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerScore++
        return 'You win!';
    }else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++
        return 'You Win!';
    }else{
        computerScore++
        return 'You lose!';
    }
} 

console.log(game(playerSelection, computerSelection));
//Create function that plays 5 rounds of rock paper scissors and declares the winner with most won rounds.
function game(playerSelection, computerSelection) {
    game1 = playRound(playerSelection, computerSelection)
    game2 = playRound(playerSelection, computerSelection)
    game3 = playRound(playerSelection, computerSelection)
    game4 = playRound(playerSelection, computerSelection)
    game5 = playRound(playerSelection, computerSelection)
    console.log(game1, game2, game3, game4, game5)
    return game1, game2, game3, game4, game5;
    
}