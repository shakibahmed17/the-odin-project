const score = {
  humanScore: 0,
  computerScore: 0,
  tie: 0,
  round: 0
};

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

function displayResult(result = 'Tie', humanChoice, computerChoice) {
  if (result === "Tie") {
    console.log(`
You Choose ${humanChoice} and Computer Choose ${computerChoice}\n
Match Tie\n
Computer Score : ${score.computerScore}\n
Your Score : ${score.humanScore}\n
Tie : ${score.tie}\n
Total Match : ${score.round}
`);
  } else {
    console.log(`
${computerChoice} beats ${humanChoice}\n
${result} Win\n
Computer Score : ${score.computerScore}\n
Your Score : ${score.humanScore}\n
Tie : ${score.tie}\n
Total Match : ${score.round}
`);
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    score.round++;
    score.tie++;
    displayResult(humanChoice, computerChoice);
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
}

function resetGame() {
  score.humanScore = 0;
  score.computerScore = 0;
  score.round = 0;
  score.tie = 0;

  console.log("Game Reset Successfully!");
}