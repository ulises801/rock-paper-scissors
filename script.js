let playerWins = 0;
let computerWins = 0;
game();

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    let computerChoice = options[Math.floor(Math.random() * 3)];

    return computerChoice;
}

function getPlayerSelection() {

    let playerSelection;

    do {
        playerSelection = prompt("Welcome to Rock Paper Scissors, enter selection.").toLowerCase();
    } while (playerSelection != "paper" && playerSelection != "rock" && playerSelection != "scissors")

    return playerSelection;
}

function playRound(player, computer) {
    
    console.log("Player: " + player)
    console.log("Computer: " + computer)
    let result;

    if (player === computer) {
        result = "Tie...";
    } else if (player === "rock" && computer === "paper") {
        computerWins++;
        result = "You lose, paper beats rock";
    } else if (player === "rock" && computer === "scissors") {
        playerWins++;
        result = "You win, rock beats scissors";
    }else if (player === "paper" && computer === "rock") {
        playerWins++;
        result = "You win, paper beats rock";
    }else if (player === "paper" && computer === "scissors") {
        computerWins++;
        result = "You lose, scissors beats paper";
    }else if (player === "scissors" && computer === "rock") {
        computerWins++;
        result = "You lose, rock beats scissors";
    }else if (player === "scissors" && computer === "paper") {
        playerWins++;
        result = "You win, scissors beats paper";
    }else {
        result = "Unknown result";
    }

    return result;
}

function game(){
    let round = 0

    do{
        console.log(playRound(getPlayerSelection(), getComputerChoice()));
        round++;
        console.log("-------------------------")
    }while(round<5)
    console.log(playerWins);
    console.log(computerWins);

    if(playerWins == computerWins){
        console.log("Tie...")
    }else if(playerWins > computerWins){
        console.log("Player wins!")
    }else{
        console.log("YOU LOSE!")
    }
}