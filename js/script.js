function getComputerChoice(){

    // randomNumber = Random number between 1 and 3
    randomNumber = Math.floor(Math.random()*3) + 1;
    // console.log(randomNumber);

    // print rock paper or scissors
    if (randomNumber === 1) {
        console.log("rock");
    } else if (randomNumber === 2){
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

function getHumanChoice(){
    // PROMPT for choice
    let player_choice = prompt("Please enter rock, paper, or Scissors:");
    console.log(player_choice);
    // parse choice to be all lowercase
    let choice = player_choice.toLowerCase();
    // return parsed choice
    console.log(choice);
}

getComputerChoice();
getHumanChoice();