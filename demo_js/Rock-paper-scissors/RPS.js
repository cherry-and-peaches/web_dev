
 function getComputerChoice() {
   let comCho = Math.random();
    console.log(comCho);
   if (comCho >= 0 && comCho < 1 / 3) {
      console.log("rock");
     comCho = "rock";
   } else if (comCho >= 1 / 3 && comCho < 2 / 3) {
      console.log("paper");
     comCho = "paper";
   } else if (comCho >= 2 / 3 && comCho <= 1) {
      console.log("scissors");
     comCho = "scissors";
   } else {
     console.log(duhhh);
   }
   return comCho;
 }

 let computerChoice = getComputerChoice();
 console.log(computerChoice);

 function getHumanChoice() {
   let humCho = prompt("choice ");
   humCho = humCho.toLowerCase();
    console.log(humCho);
   return humCho;
 }

 let humanChoice = getHumanChoice();
 console.log(humanChoice);

function playGames() {

     let humanScore = 0;
     let computerScore = 0;

 function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
      console.log(" Draw ");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
      console.log(" Draw ");
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
      console.log(" Draw ");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log(" You lose! Paper beats Rock");
      computerScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
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
}

for (i = 1; i <= 5; i++) {
   playRound(humanChoice, computerChoice);
};