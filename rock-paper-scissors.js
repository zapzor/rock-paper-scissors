// Score tracking and DOM containers

let playerScore = 0;
let computerScore = 0;
const score = document.createElement('div');

const container0 = document.querySelector('.div');
const content = document.createElement('div');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

container0.appendChild(content);
container0.appendChild(score);

function computerPlay() {
  const computerChoice = ['rock', 'paper', 'scissors'];
  return computerChoice[Math.floor(Math.random() * 3)];
}

function playerWin(playerSelection, computerSelection) {
  if (
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors')
  ) {
    playerScore += 1;
    content.textContent = 'You win!';
    score.textContent = `Player score is ${playerScore}, computer score is ${computerScore}`;
  }
}

function computerWin(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    computerScore += 1;
    content.textContent = 'You lose!';
    score.textContent = `Player score is ${playerScore}, computer score is ${computerScore}`;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    content.textContent = 'Draw';
  }
  playerWin(playerSelection, computerSelection);
  computerWin(playerSelection, computerSelection);
}

rock.addEventListener('click', () => {
  const playerSelection = 'rock';
  playRound(playerSelection, computerPlay());
});

paper.addEventListener('click', () => {
  const playerSelection = 'paper';
  playRound(playerSelection, computerPlay());
});

scissors.addEventListener('click', () => {
  const playerSelection = 'scissors';
  playRound(playerSelection, computerPlay());
});
