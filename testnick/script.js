const choices = ["rock", "paper", "scissors"];
const playerButtons = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result");
const restartButton = document.getElementById("restart");

playerButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        displayResult(playerChoice, computerChoice, result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(player, computer, result) {
    resultDisplay.innerHTML = `
        You chose: ${player} <br>
        Computer chose: ${computer} <br>
        Result: ${result}
    `;
    document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
    restartButton.style.display = "block";
}

restartButton.addEventListener("click", () => {
    resultDisplay.innerHTML = "";
    document.querySelectorAll(".choice").forEach(btn => btn.disabled = false);
    restartButton.style.display = "none";
});
