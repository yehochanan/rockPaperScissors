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

// main function
function playGame() {
    // variables
    let humanScore = 0;
    let computerScore = 0;

    // win - loose text
    function winText(){
        console.log("Congrats! You won");
    }

    function loseText(){
        console.log("Better luck next time");
    }

    function tieText(){
        console.log("A draw, too bad")
    }

    // single round of rps

    function playRound(HumanChoice, ComputerChoice){
       

        // Game mechanics for rps
        if (HumanChoice === "rock" && ComputerChoice === "paper") {
            loseText();
            return computerScore++;
        } else if (HumanChoice === "rock" && ComputerChoice === "scissors") {
            winText();
            return humanScore++;
        } else if (HumanChoice === "paper" && ComputerChoice === "rock") {
            winText();
            return humanScore++;
        } else if (HumanChoice === "paper" && ComputerChoice === "scissors") {
            loseText();
            return computerScore++;
        } else if (HumanChoice === "scissors" && ComputerChoice === "rock") {
            loseText();
            computerScore++;
        } else if (HumanChoice === "scissors" && ComputerChoice === "paper") {
            winText();
            return humanScore++;
        } else {
            tieText();
        }
        
    } 

    

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();


    
    // round 1
    playRound(humanSelection,computerSelection);

    console.log("The Computers current score is: " + computerScore);
    console.log("The players current score is: " + humanScore);
    

    // round 2
    
    playRound(humanSelection2,computerSelection2);

    console.log("The Computers current score is: " + computerScore);
    console.log("The players current score is: " + humanScore);
    
    // round 3
    
    playRound(humanSelection3,computerSelection3);

    console.log("The Computers current score is: " + computerScore);
    console.log("The players current score is: " + humanScore);
    
    // round 4
    
    playRound(humanSelection4,computerSelection4);

    console.log("The Computers current score is: " + computerScore);
    console.log("The players current score is: " + humanScore);

    // round 5
    
    playRound(humanSelection5,computerSelection5);

    console.log("The Computers current score is: " + computerScore);
    console.log("The players current score is: " + humanScore);


}

playGame();
