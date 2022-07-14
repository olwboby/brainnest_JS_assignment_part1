'use strict';

const gameChoiseOptions = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let rounds = 5;

// ---- FUNCTION TO GENERATE RANDOM COMPUTER CHOISE ----
const computerPlay = function () {
  const randomChoice = gameChoiseOptions[Math.floor(Math.random() * gameChoiseOptions.length)];
  return randomChoice;
};

// ---- FUNCTION TO CHECK WHO IS THE WINNER ----
const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const playerWonMessage = `Player won the round! ${playerSelection} beats ${computerSelection}`;
  const computerWonMessage = `Computer won the round! ${computerSelection} beats ${playerSelection}`;

  if (playerSelection == computerSelection) {
    console.log(`It's a draw both have ${playerSelection}`);
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      console.log(playerWonMessage);
      playerScore++;
    } else {
      console.log(computerWonMessage);
      computerScore++;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      console.log(playerWonMessage);
      playerScore++;
    } else {
      console.log(computerWonMessage);
      computerScore++;
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'paper') {
      console.log(playerWonMessage);
      playerScore++;
    } else {
      console.log(computerWonMessage);
      computerScore++;
    }
  } else {
    alert('Invalid input! Please enter "Rock", "Paper" or "Scissors"');
    rounds += 1;
  }
};

// ---- FUNCTION TO RUN THE GAME ----
const game = function () {
  for (let i = 0; i < rounds; i++) {
    playRound(prompt('Please choose between "Rock", "Paper" or "Scissors"'), computerPlay());
  }
  if (playerScore > computerScore) {
    console.log(`Player won the Game with the score ${playerScore} 🎉`);
  } else if (playerScore < computerScore) {
    console.log(`Computer won the Game with the score ${computerScore}🎉`);
  } else {
    console.log(`It's a draw. Both have same score of: ${playerScore} 🤝`);
  }
};

game();
