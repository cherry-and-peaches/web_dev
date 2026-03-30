console.log("ROCK PAPER SCISSORS GAME");

// Function for getting Computer choice
function getComputerChoice() {
  let comCho = Math.random();
  if (comCho >= 0 && comCho < 1 / 3) {
    console.log("Computer Move : rock");
    comCho = "rock";
  } else if (comCho >= 1 / 3 && comCho < 2 / 3) {
    console.log("Computer Move : paper");
    comCho = "paper";
  } else if (comCho >= 2 / 3 && comCho <= 1) {
    console.log("Computer Move : scissors");
    comCho = "scissors";
  } else {
    console.log(duhhh);
  }
  return comCho;
}

// Function for getting Human choice
function getHumanChoice() {
  let humCho = prompt("choice ");
  humCho = humCho.toLowerCase();
  console.log(`Your Move : ${humCho}`);
  return humCho;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Funtion for a single round
  function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "rock") {
      console.log(" Draw ");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
      console.log(" Draw ");
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
      console.log(" Draw ");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log(" You lose! Paper beats Rock");
      computerScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log(" You Win! Rock beats Scissor");
      humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log(" You Win! Paper beats Rock");
      humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log(" You lose! Scissors beats Paper");
      computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log(" You lose! Rock beats Scissors");
      computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log(" You Win! Scissors beats Paper");
      humanScore += 1;
    } else {
      console.log("WTF");
    }

    console.log(humanScore);
    console.log(computerScore);
  }

  for (i = 1; i <= 5; i++) {
    playRound();
  }

  if (humanScore > computerScore) {
    console.log("You have won the game");
  } else if (humanScore < computerScore) {
    console.log("You have lost the game");
  } else {
    console.log("The game is a draw");
  }
}

playGame();