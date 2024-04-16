//determines what computer plays
let computerChoice;
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      computerChoice = "rock";
    } else if (randomNumber === 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice;
  }
  

  let tally = document.querySelector("#tally");
  let result = document.querySelector("#result");

  //plays a single round
  let outcome;
  function playRound(playerChoice, computerChoice) {
    switch (true) {
      case playerChoice === "rock" && computerChoice === "rock":
        outcome = "Tie";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        break;
      case playerChoice === "paper" && computerChoice === "paper":
        outcome = "Tie";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        break;
      case playerChoice === "scissors" && computerChoice === "scissors":
        outcome = "Tie";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        break;
      case playerChoice === "rock" && computerChoice === "paper":
        outcome = "You lose";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        updateRound(outcome);
        break;
      case playerChoice === "paper" && computerChoice === "scissors":
        outcome = "You lose";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        updateRound(outcome);
        break;
      case playerChoice === "scissors" && computerChoice === "rock":
        outcome = "You lose";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        updateRound(outcome);
        break;
      case playerChoice === "rock" && computerChoice === "scissors":
        outcome = "You win";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        updateRound(outcome);
        break;
      case playerChoice === "paper" && computerChoice === "rock":
        outcome = "You win";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        updateRound(outcome);
        break;
      case playerChoice === "scissors" && computerChoice === "paper":
        outcome = "You win";
        result.innerText = "You selected " + playerChoice + ". The computer selected " + computerChoice + ". " + outcome;
        updateRound(outcome);
        break;
      default:
        return "Something went wrong";
    }
    return outcome;
  }

  let container = document.querySelector("#container");

  container.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    };

    tally.innerText = "Rounds played: " + round + "\n" +  "W: " + tallyW + " L: " + tallyL;
  });

  var round = 0;
  var tallyW = 0;
  var tallyL = 0;
  var maxGames = 5;

function updateRound(outcome) {
  round = round + 1
  if (outcome == "You win") {
    tallyW = tallyW + 1;
  } else if (outcome == "You lose") {
    tallyL = tallyL + 1;
  } else {
    //draw
  }
  if (round >= maxGames) {
    alert("You have won " + tallyW + " out of " + round + " games.");
    round = 0;
    tallyW = 0;
    tallyL = 0;
  }
};