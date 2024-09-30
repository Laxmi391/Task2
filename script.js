let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const message = document.getElementById('message');

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, computerChoice);
    
    if (result === 'win') {
        playerScore++;
        message.textContent = `You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`;
    } else if (result === 'lose') {
        computerScore++;
        message.textContent = `You Lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`;
    } else {
        message.textContent = `It's a Draw! You both chose ${capitalize(playerChoice)}`;
    }

    updateScores();
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScores() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
