import React, { useState } from 'react';
import './style.css';

function App() {
  const [gameText, setGameText] = useState('');
  const [scoreTracking, setScoreTracking] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

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
      setPlayerScore(playerScore + 1);
      setGameText('You win!');
      setScoreTracking(
        `Player score is ${playerScore}, computer score is ${computerScore}`
      );
    }
  }

  function computerWin(playerSelection, computerSelection) {
    if (
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'scissors' && computerSelection === 'rock') ||
      (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
      setComputerScore(computerScore + 1);
      setGameText('You lose!');
      setScoreTracking(
        `Player score is ${playerScore}, computer score is ${computerScore}`
      );
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      setGameText('Draw');
    }
    playerWin(playerSelection, computerSelection);
    computerWin(playerSelection, computerSelection);
  }

  function rockClicked() {
    const playerSelection = 'rock';
    playRound(playerSelection, computerPlay());
  }

  function paperClicked() {
    const playerSelection = 'paper';
    playRound(playerSelection, computerPlay());
  }

  function scissorsClicked() {
    const playerSelection = 'scissors';
    playRound(playerSelection, computerPlay());
  }

  return (
    <div className='App'>
      <div class='container'>
        <div class='buttonWrap'>
          <button onClick={rockClicked} id='rock'>
            Rock
          </button>
          <button onClick={paperClicked} id='paper'>
            Paper
          </button>
          <button onClick={scissorsClicked} id='scissors'>
            Scissors
          </button>
          <h1>{scoreTracking}</h1>
          <h1>{gameText}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
