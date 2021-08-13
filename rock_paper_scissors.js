//html variables and score tracking
let playerScore = 0
let computerScore = 0
const computerSelection = computerPlay();

rock.addEventListener('click', function () {
    playerSelection = 'rock'
    console.log(rounds(playerSelection, computerSelection))
})

paper.addEventListener('click', function () {
    playerSelection = 'paper'
    console.log(rounds(playerSelection, computerSelection))
})

scissors.addEventListener('click', function () {
    playerSelection = 'scissors'
    console.log(rounds(playerSelection, computerSelection))
})


//Create function that randomly returns rock, paper or scissors.
function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors']
    let computerPlay = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerPlay;
}

//Create function that plays 5 rounds of rock paper scissors and declares the winner with most won rounds.
function game(playerSelection, computerSelection) {
    const container0 = document.querySelector('#div');
    const content = document.createElement('div')
    const score = document.createElement('p1')
    content.textContent = ''
    score.textContent = ''
    content.style.color = 'white';
    score.style.color = 'white'
    container0.appendChild(content);
    container0.appendChild(score)

        if (playerSelection === null || playerSelection === '') {
            content.textContent = 'Please enter a valid value'
            return 'Please enter a value';
        } else if (playerSelection === computerSelection) {
            content.textContent = 'Draw'
            return 'Draw';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper' 
        || playerSelection === 'paper' && computerSelection === 'rock' 
        || playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++
            content.textContent = 'You win!'
            score.textContent = playerScore
            return 'You win!';
        } else if (playerSelection === 'rock' && computerSelection === 'paper'
        || playerSelection === 'scissors' && computerSelection === 'rock'
        || playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++
            content.textContent = 'You lose!'
            score.textContent = computerScore
            return 'You lose!';
        } else{
            content.textContent = 'Something went wrong'
            return 'Something went wrong';
        }}

function rounds() {
    for (i = 0; i < 5; i++) {
        if (i < 5) {
            content.textContent = playerScore, computerScore
            return game(playerSelection, computerSelection);
        } else if (i === 5 && playerScore > computerScore) {
            content.textContent = 'You won! Play again?'
            return 'You won! Play again?';
        } else if (i === 5 && computerScore > playerScore) {
            content.textContent = 'You lost! Play again?'
            return 'You lost! Play again?'
        }
    }}