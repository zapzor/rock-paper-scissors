import { useState } from 'react';
import './App.css';

function App() {
  const [gameText, setGameText] = useState('');
  const [scoreTracking, setScoreTracking] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function computerPlay() {
    const computerChoice: string[] = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
  }

  function playerWin(playerSelection: string, computerSelection: string) {
    if (
      (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Rock' && computerSelection === 'scissors')
    ) {
      setPlayerScore(playerScore + 1);
      setGameText('You win!');
    }
  }

  function computerWin(playerSelection: string, computerSelection: string) {
    if (
      (playerSelection === 'Rock' && computerSelection === 'Paper') ||
      (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
      (playerSelection === 'Paper' && computerSelection === 'Scissors')
    ) {
      setComputerScore(computerScore + 1);
      setGameText('You lose!');
    }
  }

  function playRound(playerSelection: string, computerSelection: string) {
    if (playerSelection === computerSelection) {
      setGameText('Draw');
    }
    playerWin(playerSelection, computerSelection);
    computerWin(playerSelection, computerSelection);
    setScoreTracking(
      `Player score is ${playerScore}, computer score is ${computerScore}`
    );
  }

  function rockClicked() {
    let playerSelection = 'Rock';

    playRound(playerSelection, computerPlay());
  }

  function PaperClicked() {
    const playerSelection = 'Paper';
    playRound(playerSelection, computerPlay());
  }

  function ScissorsClicked() {
    const playerSelection = 'Scissors';
    playRound(playerSelection, computerPlay());
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='buttonWrap'>
          <button onClick={rockClicked} id='rock'>
            Rock
          </button>
          <button onClick={PaperClicked} id='Paper'>
            Paper
          </button>
          <button onClick={ScissorsClicked} id='Scissors'>
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
