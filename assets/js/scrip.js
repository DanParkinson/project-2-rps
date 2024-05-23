/* constants and choice array */

const choices = ["rock", "paper", "scissors"];
const buttons = document.getElementsByClassName("controls");

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


}