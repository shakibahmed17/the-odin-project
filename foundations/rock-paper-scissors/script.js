let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    humanScore: 0,
    computerScore: 0,
    tie: 0,
    round: 0,
  };
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice < 1) {
    return "rock";
  } else if (computerChoice < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(humanChoice) {
  if (humanChoice === 1) {
    return "rock";
  } else if (humanChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function displayResult(result, humanChoice, computerChoice) {
  document.querySelector(".reset-text").innerHTML = "";

  if (result === "Tie") {
    let finalText = document.querySelector(".scoreboard-text");

    finalText.innerHTML = `
You and Computer choose ${humanChoice}<br>
Match Tie<br>
Computer Score : ${score.computerScore}<br>
Your Score : ${score.humanScore}<br>
Tie : ${score.tie}<br>
Total Match : ${score.round}
`;
  } else if (result === "Computer") {
    let finalText = document.querySelector(".scoreboard-text");
    finalText.innerHTML = `
${computerChoice} beats ${humanChoice}<br>
${result} Win<br>
Computer Score : ${score.computerScore}<br>
Your Score : ${score.humanScore}<br>
Tie : ${score.tie}<br>
Total Match : ${score.round}
`;
  } else {
    let finalText = document.querySelector(".scoreboard-text");
    finalText = `
${humanChoice} beats ${computerChoice}<br>
${result} Win<br>
Computer Score : ${score.computerScore}<br>
Your Score : ${score.humanScore}<br>
Tie : ${score.tie}<br>
Total Match : ${score.round}
`;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    score.round++;
    score.tie++;
    displayResult("Tie", humanChoice, computerChoice);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    score.round++;
    score.computerScore++;
    displayResult("Computer", humanChoice, computerChoice);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    score.round++;
    score.computerScore++;
    displayResult("Computer", humanChoice, computerChoice);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    score.round++;
    score.computerScore++;
    displayResult("Computer", humanChoice, computerChoice);
  } else {
    score.round++;
    score.humanScore++;
    displayResult("You", humanChoice, computerChoice);
  }

  localStorage.setItem("score", JSON.stringify(score));
}

function resetGame() {
  score.humanScore = 0;
  score.computerScore = 0;
  score.tie = 0;
  score.round = 0;

  localStorage.removeItem("score");

  let resetText = document.querySelector(".reset-text");
  resetText.innerHTML = "Game Score Reset Successfully!";

  let finalText = document.querySelector(".scoreboard-text");
  finalText.innerHTML = `
Computer Score : ${score.computerScore}<br>
Your Score : ${score.humanScore}<br>
Tie : ${score.tie}<br>
Total Match : ${score.round}<br>
`;
}
