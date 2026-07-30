let humanScore = 0;
let computerScore = 0;

console.log("TOP ROCK-PAPER-SCISSORS GAME! THIS GAME HAS 5 ROUNDS!");

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

function getHumanChoice(){
    return String(prompt("Enter your choice (rock, paper, scissors)")).toLowerCase();
}

function playRound(humanChoice, computerChoice){
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
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
    } else if (result === -1){
        console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    } else {
        console.log(`It's a tie. Same ${humanChoice}.`);
    }
}

function playGame(){
    let winner;

    for (let i = 1; i <= 5; i = i + 1){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }

    console.log("Game ended...");
    
    if (humanScore > computerScore){
        console.log(`Human won!.`);
    } else if (humanScore < computerScore) {
        console.log(`Computer won!.`);
    } else {
        console.log(`It's a game tie!.`);
    }
    console.log("SCORES");
    console.log(`Human: ${humanScore}       Computer: ${computerScore}`);
}

let activate = -1;
if (activate === 1){
    playGame();
}