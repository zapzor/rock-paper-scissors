//Create function that randomly returns rock, paper or scissors.
function computerPlay() {
    let game = ['Rock', 'Paper', 'Scissors'];
    let rps = game[Math.floor(Math.random()*game.length)];
    return rps;
}
//Create function that takes player input of rock, paper or scissors.
function playerSelection() {
    let lower = prompt('Rock, paper or scissors?', '')
    let player = lower.toLowerCase
}

//Create function that plays a round of rock paper scissors.
function playRound() {
    let computer = computerPlay
    if(lower === 'Rock' && computer === 'Paper') {
        alert('You Win!')
    }else if(lower === 'Scissors' && computer === 'Paper'){
        alert('You win!')
    }else if(lower === 'Paper' && computer === 'Rock'){
            alert('You win!')
    }else{
        alert('You lose!')
    }
} 
console.log(computerPlay);
//Create function that declares winner of round.

//Create function that plays 5 rounds of rock paper scissors and declares the winner with most won rounds.