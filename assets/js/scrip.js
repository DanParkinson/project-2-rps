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
}