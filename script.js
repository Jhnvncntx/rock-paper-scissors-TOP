console.log("Hello World!");

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
console.log (getComputerChoice());

function getHumanChoice(){
    return prompt("Enter your choice (rock, paper, scissors)");
}
console.log(getHumanChoice());