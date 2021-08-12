//Create function that randomly returns rock, paper or scissors.
const computerSelection = computerPlay();
function computerPlay() {
    let game = ['rock', 'paper', 'scissors']
    let computerPlay = game[Math.floor(Math.random()*game.length)];
    return computerPlay;
}
//Create function that takes player input of rock, paper or scissors.
//Create a UI that displays three buttons for each possible selection with an eventListener.


//Create function that plays 5 rounds of rock paper scissors and declares the winner with most won rounds.
function game(playerSelection, computerSelection) {
    
    const container0 = document.querySelector('#div');
    const content = document.createElement('div')
    content.textContent = 'Rock, paper or scissors?'
    container0.appendChild(content);

    const playerScore = 0
    const computerScore = 0

        if (playerSelection === null || playerSelection === '') {
            content.textContent = 'Please enter a valid value'
            return 'Please enter a value';
        } else if (playerSelection === computerSelection) {
            content.textContent = 'Draw'
            return 'Draw';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper' 
        || playerSelection === 'paper' && computerSelection === 'rock' 
        || playerSelection === 'rock' && computerSelection === 'scissors') {
            content.textContent = 'You win!'
            return 'You win!';
        } else if (playerSelection === 'rock' && computerSelection === 'paper'
        || playerSelection === 'scissors' && computerSelection === 'rock'
        || playerSelection === 'paper' && computerSelection === 'scissors') {
            content.textContent = 'You lose!'
            return 'You lose!';
        } else{
            content.textContent = 'Something went wrong'
            return 'Something went wrong';
        }
    }

rock.addEventListener('click', function () {
    playerSelection = 'rock'
    console.log(game(playerSelection, computerSelection))
})

paper.addEventListener('click', function () {
    playerSelection = 'paper'
    console.log(game(playerSelection, computerSelection))
})

scissors.addEventListener('click', function () {
    playerSelection = 'scissors'
    console.log(game(playerSelection, computerSelection))
})