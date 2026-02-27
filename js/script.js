let humanScore = 0;
let computerScore = 0;


// Get computer choice

function getComputerChoice(){

    // randomNumber = Random number between 1 and 3
    randomNumber = Math.floor(Math.random()*3) + 1;
    // console.log(randomNumber);

    // print rock paper or scissors
    if (randomNumber === 1) {
        // console.log("rock");
        return "rock";
    } else if (randomNumber === 2){
        // console.log("paper");
        return "paper";
    } else {
        // console.log("scissors");
        return "scissors";
    }
}
// get human choice

function getHumanChoice(){
    // PROMPT for choice
    let player_choice = prompt("Please enter rock, paper, or scissors:");
    // console.log(player_choice);
    // parse choice to be all lowercase
    let choice = player_choice.toLowerCase();
    // return parsed choice
    // console.log(choice);
    return choice;
}

// win - loose text
function winText(){
    console.log("Congrats! You won");
}

function looseText(){
    console.log("Better luck next time");
}

function tieText(){
    console.log("A draw, too bad")
}

// single round of rps

function playRound(HumanChoice, ComputerChoice){
    // Testing function
    console.log("Player chose: " + HumanChoice);
    console.log("Computer chose: " + ComputerChoice);

    // variables
    let computerWins = false;
    let playerWins = false;

    // Game mechanics for rps
    if (HumanChoice === "rock" && ComputerChoice === "paper") {
        looseText();
        // return computerWins = true;
        return computerScore++;
    } else if (HumanChoice === "rock" && ComputerChoice === "scissors") {
        winText();
        // return playerWins = true;
        return humanScore++;
    } else if (HumanChoice === "paper" && ComputerChoice === "rock") {
        winText();
        // return playerWins = true;
        return humanScore++;
    } else if (HumanChoice === "paper" && ComputerChoice === "scissors") {
        looseText();
        // return computerWins = true;
        return computerScore++;
    } else if (HumanChoice === "scissors" && ComputerChoice === "rock") {
        looseText();
        // return computerWins = true;
        computerScore++;
    } else if (HumanChoice === "scissors" && ComputerChoice === "paper") {
        winText();
        // return playerWins = true;
        return humanScore++;
    } else {
        tieText();
    }
    
    // if (computerWins === true) {
    //     computerScore++;
    // } else if (playerWins === true) {
    //     humanScore++;
    // } else {
    //     // do nothing
    // }
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



// getComputerChoice();
// getHumanChoice();
playRound(humanSelection,computerSelection);

console.log("The Computers current score is: " + computerScore);
console.log("The players current score is: " + humanScore);