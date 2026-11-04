let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = {
    playerScore: 0,
    computerScore: 0,
    tie: 0,
    round: 5,
  };
}

// function for load the data
function updateScoreboard() {
  document.querySelector('.round-left').innerHTML = score.round;
  document.querySelector('.player-score').innerHTML = score.playerScore;
  document.querySelector('.tie-score').innerHTML = score.tie;
  document.querySelector('.computer-score').innerHTML = score.computerScore;
}
updateScoreboard();


// function for generate the computer move
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice < 1) {
    return 'Rock';
  } else if (computerChoice < 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// function for show the final result after 5 rounds
function displayFinalResult() {
  let finalResult = document.querySelector(".final-result");

  if (score.playerScore === score.computerScore) {
    finalResult.innerHTML = 'Match Tie!';
  } else if (score.playerScore > score.computerScore) {
    finalResult.innerHTML = 'You Win!';
  } else {
    finalResult.innerHTML = 'You Lost!';
  }
}

// function for update the score after each round
function displayResult(result, playerChoice, computerChoice) {
  if (result === 'Tie') {
    document.querySelector('.round-left').innerHTML = score.round;
    document.querySelector('.tie-score').innerHTML = score.tie;
    document.querySelector('.round-result').innerHTML = `Both Move are ${computerChoice} - Tie!`
  }
  else if (result === 'Player') {
    document.querySelector('.round-left').innerHTML = score.round;
    document.querySelector('.player-score').innerHTML = score.playerScore;
    document.querySelector('.round-result').innerHTML = `Your ${playerChoice} Move Beat Computer ${computerChoice} Move `
  }
  else {
    document.querySelector('.round-left').innerHTML = score.round;
    document.querySelector('.computer-score').innerHTML = score.computerScore;
    document.querySelector('.round-result').innerHTML = `Computer ${computerChoice} Move Beat Your ${playerChoice} Move `
  }
    
}

// function for play a round
function playRound(playerChoice) {
  if (score.round <= 0) {
    displayFinalResult();
    return;
    
  }

  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    score.round--;
    score.tie++;
    displayResult('Tie', playerChoice, computerChoice);
  } else if (
    (playerChoice === 'Rock' && computerChoice == 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Rock')
  ) {
    score.computerScore++;
    score.round--;
    displayResult('Computer', playerChoice, computerChoice);
  } else {
    score.playerScore++;
    score.round--;
    displayResult('Player', playerChoice, computerChoice);
  }

  updateScoreboard();
  localStorage.setItem('score', JSON.stringify(score));

  if (score.round === 0) {
    displayFinalResult();
  }
}

// function for reset all the score
function resetGame() {
  score.plyerScore = 0;
  score.computerScore = 0;
  score.tie = 0;
  score.round = 5;

  localStorage.removeItem('score');

  document.querySelector('.round-left').innerHTML = score.round;

  document.querySelector('.player-score').innerHTML = score.plyerScore;

  document.querySelector('.tie-score').innerHTML = score.tie;

  document.querySelector('.computer-score').innerHTML = score.computerScore;

  document.querySelector('.reset-text').innerHTML = 'Game Score Reset Successfully!';
}
