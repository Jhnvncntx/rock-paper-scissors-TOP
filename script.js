let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5;

console.log(`TOP ROCK-PAPER-SCISSORS GAME! THIS GAME HAS ${totalRounds} ROUNDS!`);

function getComputerChoice(){
    let botChoice = Math.floor(Math.random() * 3);

    if (botChoice === 0) {
        return "rock";
    } else if (botChoice === 1) {
        return "paper";
    } else if (botChoice ===2) {
        return "scissors";
    } else {
        return "error";
    }
}

function playRound(humanChoice, computerChoice){
    const resultBox = document.querySelector(".result");
    let result = 0
    switch (humanChoice){
        case "rock":
            switch (computerChoice){
                case "paper": result = -1; break;
                case "scissors": result = 1; break;
                default: result = 0; break;
            }
            break;
        case "paper":
            switch (computerChoice){
                case "rock": result = 1; break;
                case "scissors": result = -1; break;
                default: result = 0; break;
            }
            break;
        case "scissors":
            switch (computerChoice){
                case "rock": result = -1; break;
                case "paper": result = 1; break;
                default: result = 0; break;
            }
            break;
        default:
            console.log("round error");
    }
        
    if (result === 1){
        resultBox.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
    } else if (result === -1){
        resultBox.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
        console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    } else {
        resultBox.textContent = `It's a tie. Same ${humanChoice}.`;
        console.log(`It's a tie. Same ${humanChoice}.`);
    }

    roundsPlayed++;
    console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    console.log(`Round ${roundsPlayed} of ${totalRounds} completed.`);

    if (roundsPlayed === totalRounds){
        endGame();
    }
}

function endGame() {
    const finalResult = document.querySelector(".final-result");
    console.log("===== Game Over =====");
    if (humanScore > computerScore){
        finalResult.textContent = "Human won!";
        console.log("Human won!");
    } else if (humanScore < computerScore){
        finalResult.textContent = "Computer won!";
        console.log("Computer won!");
    } else {
        finalResult.textContent = "It's a tie!";
        console.log("It's a tie!");
    }

    document.getElementById("rock-btn").disabled = true;
    document.getElementById("paper-btn").disabled = true;
    document.getElementById("scissors-btn").disabled = true;
    document.getElementById("restart-btn").style.display = "inline-block";
}

function setupGame() {
    const rockBtn = document.getElementById("rock-btn");
    const paperBtn = document.getElementById("paper-btn");
    const scissorsBtn = document.getElementById("scissors-btn");
    const restartBtn = document.getElementById("restart-btn");

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    restartBtn.onclick = function() {
        restartGame();
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    const restartBtn = document.getElementById("restart-btn");
    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;
    document.getElementById("restart-btn").style.display = "none";
}

setupGame();