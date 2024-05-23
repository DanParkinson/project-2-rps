/* constants and choice array */

const choices = ["rock", "paper", "scissors"];
const buttons = document.getElementsByClassName("controls");
const playerDisplay = document.getElementById("playerchoiceimg");
const computerDisplay = document.getElementById("computerchoiceimg");
const resultDisplay = document.getElementById("result");
const currentScoreDisplay = document.getElementById("currentscoredisplay");
const livesDisplay = document.getElementById("livesdisplay");
const highScoreDisplay = document.getElementById("highscoredisplay");

var currentScore = 0;
var lives = 3;
var highScore = 0;

/* button click starts game */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-type");
        playGame(playerChoice);
    })
}

function playGame(playerChoice) {

    /*generates computer choice*/
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    console.log(computerChoice);

    /*compares playerchoice to computerchoice*/
    if (playerChoice === computerChoice) {
        result = "DRAW!"
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "WIN!" : "LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "WIN!" : "LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "WIN!" : "LOSE!";
                break;
        }
    }
    console.log(result);

    /*changes images to player and computer choice and prints result*/
    playerDisplay.src = `assets/images/${playerChoice}.png`;
    playerDisplay.alt = choices[playerChoice];

    computerDisplay.src = `assets/images/${computerChoice}.png`;
    computerDisplay.alt = choices[computerChoice];

    resultDisplay.textContent = result;

    /*resets color of results messages*/
    resultDisplay.classList.remove("greentext", "redtext")

    switch (result) {
        case "WIN!":
            resultDisplay.classList.add("greentext");
            currentScore++;
            currentScoreDisplay.textContent = currentScore;
            break;
        case "LOSE!":
            resultDisplay.classList.add("redtext");
            lives--;
            livesDisplay.textContent = lives;
            break;
    }

    if (currentScore > highScore) {
        highScore++;
        highScoreDisplay.textContent = highScore;
    }
}