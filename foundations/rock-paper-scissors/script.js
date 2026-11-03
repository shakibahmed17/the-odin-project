let humanScore = 0;
let computerScore = 0;
let round = 0;
let tie = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice < 1) {
        return "rock";
    }
    else if (computerChoice < 2) {
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(humanChoice) {

    if (humanChoice === 1) {
        return "rock";
    }
    else if (humanChoice === 2) {
        return "paper";
    }
    else{
        return "scissors"
    }

}


function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        round++;
        tie++;
        console.log(`
You Choose ${humanChoice} and Computer Choose ${computerChoice}\n
Match Tie\n
Computer Score : ${computerScore}\n
Your Score : ${humanScore}\n
Tie : ${tie}\n
Total Match : ${round}
`)
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        round++;
        computerScore++;
        console.log(`
${computerChoice} beats ${humanChoice}\n
Computer Win\n
Computer Score : ${computerScore}\n
Your Score : ${humanScore}\n
Tie : ${tie}\n
Total Match : ${round}
`)
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        round++;
        computerScore++;
        console.log(`
${computerChoice} beats ${humanChoice}\n
Computer Win\n
Computer Score : ${computerScore}\n
Your Score : ${humanScore}\n
Tie : ${tie}\n
Total Match : ${round}
`)
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        round++;
        computerScore++;
        console.log(`
${computerChoice} beats ${humanChoice}\n
Computer Win\n
Computer Score : ${computerScore}\n
Your Score : ${humanScore}\n
Tie : ${tie}\n
Total Match : ${round}
`)
    }
    else {
        round++;
        humanScore++;
        console.log(`
${humanChoice} beats ${computerChoice}\n
You Win\n
Computer Score : ${computerScore}\n
Your Score : ${humanScore}\n
Tie : ${tie}\n
Total Match : ${round}
`)
    }

}


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    tie = 0;

    console.log('Game Reset Successfully!')
}