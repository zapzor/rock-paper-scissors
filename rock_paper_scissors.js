// Score tracking and DOM containers

let playerScore = 0
let computerScore = 0

const container0 = document.querySelector(".div");
const content = document.createElement("div");
const score = document.createElement("div");

container0.appendChild(content);
container0.appendChild(score);

// Function that randomly returns rock, paper or scissors

function computerPlay() {
  let computerChoice = ["rock", "paper", "scissors"]
  return computerChoice[Math.floor(Math.random() * 3)];
}

// Function that plays a round of RPS

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    content.textContent = "Draw"
      return "Draw";
  }else if (playerSelection === "scissors" && computerSelection === "paper"
   || playerSelection === "paper" && computerSelection === "rock"
   || playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++
      content.textContent = "You win!"
      score.textContent = `Player score is ${playerScore}, computer score is ${computerScore}`
  }else if (playerSelection === "rock" && computerSelection === "paper"
    || playerSelection === "scissors" && computerSelection === "rock"
    || playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++
      content.textContent = "You lose!"
      score.textContent = `Player score is ${playerScore}, computer score is ${computerScore}`
      return "You lose!";
  }else {
    content.textContent = "Something went wrong";
    return "Something went wrong";
  }
}

// Functions that plays 5 rounds of RPS

function game() {
  if (playerScore || computerScore != 5) {
  playRound(playerSelection, computerSelection)
  }else if (computerScore == 5) {
    computerScore = 0
    playerScore = 0
    content.textContent = ("The computer wins! Play again?")
    return console.log("Computer wins!")
  }else if (playerScore == 5) {
    computerScore = 0
    playerScore = 0
    content.textContent = ("The player wins! Play again?")
    return console.log("Player wins!")
    }
  }

// Event listeners for buttons

  rock.addEventListener("click", function() {
    playerSelection = "rock"
    console.log(playRound(playerSelection, computerPlay()))
  })

  paper.addEventListener("click", function () {
    playerSelection = "paper"
    console.log(playRound(playerSelection, computerPlay()))
  })

  scissors.addEventListener("click", function () {
    playerSelection = "scissors"
    console.log(playRound(playerSelection, computerPlay()))
  })
