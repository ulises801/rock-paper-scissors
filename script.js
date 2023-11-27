let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll(".option");
const results = document.querySelector("#results");
const playerDisplay = document.querySelector("#playerScore");
const computerDisplay = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
  playerWins = 0;
  computerWins = 0;
  updateScore();
  deleteChild();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isGameOver()) {
      whoWon();
    } else {
      let p = document.createElement("p");
      p.textContent = playRound(button.id, getComputerChoice());
      results.appendChild(p);
      updateScore();
    }
    if (isGameOver()) {
      whoWon();
    }
  });
});

function isGameOver() {
  return playerWins === 5 || computerWins === 5;
}

function updateScore() {
  playerDisplay.textContent = playerWins;
  computerDisplay.textContent = computerWins;
}

function deleteChild() {
  let child = results.lastElementChild;
  while (child) {
    results.removeChild(child);
    child = results.lastElementChild;
  }
}

function whoWon() {
  if (playerWins > computerWins) {
    let p = document.createElement("p");
    p.textContent = "Player wins!";
    results.appendChild(p);
  } else {
    let p = document.createElement("p");
    p.textContent = "YOU LOSE!";
    results.appendChild(p);
  }
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let computerChoice = options[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playRound(player, computer) {
  let playerChoice = "Player: " + player;
  let computerChoice = "Computer: " + computer;

  let result;

  if (player === computer) {
    result = "Tie...";
  } else if (player === "rock" && computer === "paper") {
    computerWins++;
    result = "You lose, paper beats rock";
  } else if (player === "rock" && computer === "scissors") {
    playerWins++;
    result = "You win, rock beats scissors";
  } else if (player === "paper" && computer === "rock") {
    playerWins++;
    result = "You win, paper beats rock";
  } else if (player === "paper" && computer === "scissors") {
    computerWins++;
    result = "You lose, scissors beats paper";
  } else if (player === "scissors" && computer === "rock") {
    computerWins++;
    result = "You lose, rock beats scissors";
  } else if (player === "scissors" && computer === "paper") {
    playerWins++;
    result = "You win, scissors beats paper";
  } else {
    result = "Unknown result";
  }

  return playerChoice + " | " + computerChoice + " | Result: " + result;
}
