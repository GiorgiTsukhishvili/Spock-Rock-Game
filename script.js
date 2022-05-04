"use strict";
import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");

const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let computerScore = 0;
let playerScore = 0;
//reseting
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
}

//Computer random choice

function computerRandomChoice() {
  const computerChoiceNumber = Math.trunc(Math.random() * 5 + 1);
  if (computerChoiceNumber === 1) {
    computerChoice = "rock";
  } else if (computerChoiceNumber === 2) {
    computerChoice = "paper";
  } else if (computerChoiceNumber === 3) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber === 4) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

//add selected styling in computer choice

function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;

    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;

    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;

    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;

    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a Tie";
  } else {
    const choice = choices[playerChoice];
    if (
      computerChoice === choice.defeats[0] ||
      computerChoice === choice.defeats[0]
    ) {
      startConfetti();
      resultText.textContent = "You Won!";
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      computerScore++;
      resultText.textContent = "You Lost!";
      computerScoreEl.textContent = computerScore;
    }
  }
}

//call functions to process turn
function checkresult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// choosing of player
function select(playerChoice) {
  checkresult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;

    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;

    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;

    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;

    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
window.select = select;

const reset = document.querySelector(".fas");
reset.addEventListener("click", function () {
  playerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScore = 0;
  computerScoreEl.textContent = computerScore;
  resultText.textContent = "";
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resetSelected();
});
window.reset = reset;
