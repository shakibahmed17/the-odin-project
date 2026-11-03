let score = JSON.parse(localStorage.getItem('score'));


if (!score) {
  score = {
    humanScore: 0,
    computerScore: 0,
    tie: 0,
    round: 0
  };
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice < 1) {
    return 'rock';
  } else if (computerChoice < 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice(humanChoice) {
  if (humanChoice === 1) {
    return 'rock';
  } else if (humanChoice === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function displayResult(result, humanChoice, computerChoice) {
  if (result === 'Tie') {
    console.log(`
You and Computer choose ${humanChoice}\n
Match Tie\n
Computer Score : ${score.computerScore}\n
Your Score : ${score.humanScore}\n
Tie : ${score.tie}\n
Total Match : ${score.round}
`);
  } else if (result === 'Computer') {
        console.log(`
${computerChoice} beats ${humanChoice}\n
${result} Win\n
Computer Score : ${score.computerScore}\n
Your Score : ${score.humanScore}\n
Tie : ${score.tie}\n
Total Match : ${score.round}
`);

  }
  else{
    console.log(`
${humanChoice} beats ${computerChoice}\n
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
    displayResult('Tie', humanChoice, computerChoice);
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    score.round++;
    score.computerScore++;
    displayResult('Computer', humanChoice, computerChoice);
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    score.round++;
    score.computerScore++;
    displayResult('Computer', humanChoice, computerChoice);
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    score.round++;
    score.computerScore++;
    displayResult('Computer', humanChoice, computerChoice);
  } else {
    score.round++;
    score.humanScore++;
    displayResult('You', humanChoice, computerChoice);
  }

  localStorage.setItem('score', JSON.stringify(score));
}

function resetGame() {
  score.humanScore = 0;
  score.computerScore = 0;
  score.tie = 0;
  score.round = 0;

  localStorage.removeItem('score');
  console.log('Game Score Reset Successfully!')
}