
/* loads DomCOntent and updates highScore with local data */
document.addEventListener("DOMContentLoaded", function(){
    loadHighScore();
})

/* constants and choice array */
const choices = ["rock", "paper", "scissors"];
const buttons = document.getElementsByClassName("controls");
const playerDisplay = document.getElementById("playerchoiceimg");
const computerDisplay = document.getElementById("computerchoiceimg");
const resultDisplay = document.getElementById("result");
const currentScoreDisplay = document.getElementById("currentscoredisplay");
const livesDisplay = document.getElementById("livesdisplay");
const highScoreDisplay = document.getElementById("highscoredisplay");
const localHighScore = JSON.parse(localStorage.getItem("highScore"));
const gameOverScreen = document.getElementById("gameoverscreen");
const gameArea = document.getElementById("gamearea");
const footer = document.getElementById("footer");
const restartButton = document.getElementsByClassName("restart");

var currentScore = 0;
var lives = 3;
var highScore = 0;

/* function updates local highscore on page load*/
function loadHighScore() {
    if (localStorage.getItem('highScore') !== null) {
        highScore = JSON.parse(localStorage.getItem('highScore'));
        highScoreDisplay.textContent = highScore;
    } else {
        highScore = 0;
    }
}

/* button click starts game */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-type");
        playGame(playerChoice);
    })
}

/* button click for restart function */
for (let button of restartButton) {
    button.addEventListener("click", function () {
        restart();
    })
}

function playGame(playerChoice) {

    /*generates computer choice*/
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

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

    /*changes images to player and computer choice and prints result*/
    playerDisplay.src = `assets/images/${playerChoice}.png`;
    playerDisplay.alt = choices[playerChoice];

    computerDisplay.src = `assets/images/${computerChoice}.png`;
    computerDisplay.alt = choices[computerChoice];

    resultDisplay.textContent = result;

    /* color of results messages*/
    resultDisplay.classList.remove("greentext", "redtext")

    /* changes scores and lives */
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
            if (lives < 1) {
                gameOver();
            }
            break;
    }

    /* updates high score and commits to DOM*/
    if (currentScore > highScore) {
        highScore++;
        let highScoreSerialized = JSON.stringify(highScore);
        localStorage.setItem("highScore", highScoreSerialized);
        document.getElementById("highscoredisplay").textContent = highScore;
    }
}

/*loads gameover screen*/
function gameOver() {
    footer.classList.add("hide");
    gameArea.classList.add("hide");
    gameOverScreen.classList.remove("hide");
}

/*restart button function*/
function restart() {
    footer.classList.remove("hide");
    gameArea.classList.remove("hide");
    gameOverScreen.classList.add("hide");

    currentScore = 0
    lives = 3;

    currentScoreDisplay.textContent = "0";
    livesDisplay.textContent = "3";

    playerDisplay.src = "";
    playerDisplay.alt = "";

    computerDisplay.src = "";
    computerDisplay.alt = "";

    resultDisplay.textContent = "";
}