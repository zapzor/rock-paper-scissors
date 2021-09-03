//html variables and score tracking
let playerScore = 0
let computerScore = 0
const computerSelection = computerPlay();
const container0 = document.querySelector("#div");
const content = document.createElement("div");
const score = document.createElement("p1");

container0.appendChild(content);
container0.appendChild(score);

rock.addEventListener("click", function () {
    playerSelection = "rock"
    console.log(game(playerSelection, computerSelection))
})

paper.addEventListener("click", function () {
    playerSelection = "paper"
    console.log(game(playerSelection, computerSelection))
})

scissors.addEventListener("click", function () {
    playerSelection = "scissors"
    console.log(game(playerSelection, computerSelection))
})

//Function that randomly returns rock, paper or scissors.
function computerPlay() {
    let computerChoice = ["rock", "paper", "scissors"]
    let computerPlay = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerPlay;
}

//Function that plays a round of RPS.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    content.textContent = "Draw"
      return "Draw";
  }else if (playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++
      content.textContent = "You win!"
      score.textContent = `Player score is ${playerScore}, computer score is ${computerScore}`;
  }else if (playerSelection === "rock" && computerSelection === "paper"
    || playerSelection === "scissors" && computerSelection === "rock"
    || playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++
      content.textContent = "You lose!";
      score.textContent = `Player score is ${playerScore}, computer score is ${computerScore}`;
      return "You lose!";
  }else {
    content.textContent = "Something went wrong";
    return "Something went wrong";
      }
}

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

