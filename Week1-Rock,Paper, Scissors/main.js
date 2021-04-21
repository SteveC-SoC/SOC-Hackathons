//declare variables
let playerMove;
let computerMove = ["Rock", "Paper", "Scissors"];
let wins = 0;
let draws = 0;
let losses = 0;
//this asks the player if they want to play
let confirmation = confirm("Do you want to play a game?");
let confirmationTwo;

while (confirmation || confirmationTwo === true) {
  Game();
}
if (confirmation == false) {
  console.log("Thanks for playing");
}

function Game() {
  //using prompt, ask for input from the player
  let playerChoice = prompt("Choose Rock, Paper or Scissors...");
  //store player choice as the player move
  playerMove = playerChoice;

  //get a random choice for the computer
  //pick a random nuber between 0-2, which will match up againt a value in the computerMove Array
  let cpuRandom = computerMove[Math.floor(Math.random() * computerMove.length)];

  //run function using the playerChoice and random choice for the computer
  getWinner(playerMove, cpuRandom);
  console.log(playerMove);
  console.log(cpuRandom);

  //function to determin who wins, and returns a point value
  function getWinner(playerMove, computerMove) {
    if (playerMove === "Rock" && computerMove === "Rock") {
      alert(
        "A draw, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      //increase the draws variable by one
      draws++;
      return console.log("Games drawn ", draws);
    }

    if (playerMove === "Rock" && computerMove === "Scissors") {
      alert(
        "You win, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      wins++;
      return console.log("Games won ", wins);
    }

    if (playerMove === "Rock" && computerMove === "Paper") {
      alert(
        "You lose, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      losses++;
      return console.log("Games lost ", losses);
    }

    if (playerMove === "Scissors" && computerMove === "Scissors") {
      alert(
        "A draw, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      draws++;
      return console.log("Games drawn ", draws);
    }

    if (playerMove === "Scissors" && computerMove === "Paper") {
      alert(
        "You win, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      wins++;
      return console.log("Games won ", wins);
    }

    if (playerMove === "Scissors" && computerMove === "Rock") {
      alert(
        "You lose, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      losses++;
      return console.log("Games lost ", losses);
    }

    if (playerMove === "Paper" && computerMove === "Paper") {
      alert(
        "A draw, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      draws++;
      return console.log("Games drawn ", draws);
    }

    if (playerMove === "Paper" && computerMove === "Rock") {
      alert(
        "You win, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      wins++;
      return console.log("Games won ", wins);
    }

    if (playerMove === "Paper" && computerMove === "Scissors") {
      alert(
        "You lose, you picked " +
          playerMove +
          " and the computer picked " +
          computerMove
      );
      losses++;
      return console.log("Games lost ", losses);
    }
    //if the player enters an invalid option, print in the console
    if (playerMove !== "Paper" || "Rock" || "Scissors") {
      console.log("invalid selection");
    }
    //this breaks the while loop for confirmation
    confirmation = false;
  }
  //ask the player if they want to play again
  //if the player selects ok(yes) it re-sets the confirmation to true
  confirmationTwo = confirm("Do you want to play again?");
  if (confirmationTwo !== true) {
    confirmation = false;
  }
}
