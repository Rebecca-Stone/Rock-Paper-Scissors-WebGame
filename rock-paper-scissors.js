// you need to create selectors to update the scores and the moves being displayed
const scoreKeepUser = document.querySelector(".scoreKeepUser");
const scoreKeepComp = document.querySelector(".scoreKeepComp");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const tie = document.querySelector(".tie");
const userDisplay = document.querySelector("#left");
const computerDisplay = document.querySelector("#right");

// you also need a selector for your move selection buttons
const rockUser = document.querySelector("#rock");
const paperUser = document.querySelector("#paper");
const scissorsUser = document.querySelector("#scissors");
let user = "";
let computerChoice = "";
let computer = "";
let userCount = 0;
let compCount = 0;
// you need to update the display area to show your move for each turn

rockUser.addEventListener("click", function () {
  computerChoice = Math.random();
  getComputerChoice(computerChoice);
  userDisplay.className = "fas fa-hand-rock";
  user = "rock";
  game(user, computer);
});

paperUser.addEventListener("click", function () {
  computerChoice = Math.random();
  getComputerChoice(computerChoice);
  userDisplay.className = "fas fa-hand-paper";
  user = "paper";
  game(user, computer);
});

scissorsUser.addEventListener("click", function () {
  computerChoice = Math.random();
  getComputerChoice(computerChoice);
  userDisplay.className = "fas fa-hand-scissors";
  user = "scissors";
  game(user, computer);
});
// you need a random selection function for your computer to pick a move each turn

function getComputerChoice(computerChoice) {
  if (computerChoice <= 0.34) {
    computerDisplay.className = "fas fa-hand-rock";
    computer = "rock";
  } else if (computerChoice <= 0.67) {
    computerDisplay.className = "fas fa-hand-paper";
    computer = "paper";
  } else if (computerChoice > 0.67) {
    computerDisplay.className = "fas fa-hand-scissors";
    computer = "scissors";
  }
};
// you need a function for win/loss/tie scenarios

// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case

function game(user, computer) {
  if (user === computer) {
    tie.style.display = "block";
    win.style.display = "none";
    lose.style.display = "none";
    scoreKeepUser.innerHTML = userCount;
    scoreKeepComp.innerHTML = compCount;
  } else if (user === "rock" && computer === "scissors") {
    win.style.display = "block";
    lose.style.display = "none";
    tie.style.display = "none";
    userCount++;
    scoreKeepUser.innerHTML = userCount;
    scoreKeepComp.innerHTML = compCount;
  } else if (user === "paper" && computer === "rock") {
    win.style.display = "block";
    lose.style.display = "none";
    tie.style.display = "none";
    userCount++;
    scoreKeepUser.innerHTML = userCount;
    scoreKeepComp.innerHTML = compCount;
  } else if (user === "scissors" && computer === "paper") {
    win.style.display = "block";
    lose.style.display = "none";
    tie.style.display = "none";
    userCount++;
    scoreKeepUser.innerHTML = userCount;
    scoreKeepComp.innerHTML = compCount;
  } else {
    lose.style.display = "block";
    win.style.display = "none";
    tie.style.display = "none";
    compCount++;
    scoreKeepUser.innerHTML = userCount;
    scoreKeepComp.innerHTML = compCount;
  }
}
