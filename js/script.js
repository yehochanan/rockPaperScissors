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

getComputerChoice();