//determines what computer plays
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      return "rock";
    } else if (randomNumber === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  //plays a single round
  function playRound(playerChoice, computerChoice) {
    let outcome;
    switch (true) {
      case playerChoice === "rock" && computerChoice === "rock":
        outcome = "Tie";
        break;
      case playerChoice === "paper" && computerChoice === "paper":
        outcome = "Tie";
        break;
      case playerChoice === "scissors" && computerChoice === "scissors":
        outcome = "Tie";
        break;
      case playerChoice === "rock" && computerChoice === "paper":
        outcome = "You lose";
        break;
      case playerChoice === "paper" && computerChoice === "scissors":
        outcome = "You lose";
        break;
      case playerChoice === "scissors" && computerChoice === "rock":
        outcome = "You lose";
        break;
      case playerChoice === "rock" && computerChoice === "scissors":
        outcome = "You win";
        break;
      case playerChoice === "paper" && computerChoice === "rock":
        outcome = "You win";
        break;
      case playerChoice === "scissors" && computerChoice === "paper":
        outcome = "You win";
        break;
      default:
        return "Something went wrong";
    }
    return outcome;
  }
  
  //plays an entire 5-round game and determines the winner
  function game() {
    let roundWin = 0;
    let roundLoss = 0;
  
    //plays the game
    for (let i = 1; i <= 5; i++) {
      let pChoice = prompt("Rock, paper, or scissors?").toLowerCase();
      //let pChoice = "rock";
      let cChoice = getComputerChoice();
      let outcome = playRound(pChoice, cChoice);
      if (outcome === "Tie") {
        i--;
        console.log("Tie. Please try again.");
      } else {
        console.log(
          "Round #" +
            i +
            ": You played: " +
            pChoice +
            ". The computer played: " +
            cChoice +
            ". " +
            outcome
        );
      }
  
      //counts the wins/losses/ties
      if (outcome === "You win") {
        roundWin++;
      } else if (outcome === "You lose") {
        roundLoss++;
      }
    }
    console.log("Results: W: " + roundWin + " L: " + roundLoss);
    if (roundWin >= 3) {
      console.log("You have won the game!");
    } else if (roundLoss >= 3) {
      console.log("You have lost the game.");
    }
  }
  game();