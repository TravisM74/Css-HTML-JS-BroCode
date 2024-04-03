const choices = [{word:"rock", emoji:"👊"},{word:"paper", emoji:"✋"},{word:"sissors",emoji:"✌"}];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay= document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay")

let played = 0;
let wins = 0;
let ties = 0;

function playGame(choice) {
    played++;
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let playerChoice;
    choices.forEach(c => {
        if (c.word == choice) {
            playerChoice = c;
        }
    });
    playerDisplay.textContent = `Player chose: ${playerChoice.emoji}`;
    
    computerDisplay.textContent = `Computer chose: ${computerChoice.emoji}`;
 // refactor this area
    if (choice === "rock" ) {
        switch (computerChoice.word){
            case "rock":
                resultDisplay.textContent = "Its a Tie";
                ties++;
                break;
            case "sissors":
                resultDisplay.textContent = "You Win!";
                wins++;
                break;
            case "paper":
                resultDisplay.textContent = "Computer Wins";
                break;
        }
    }
    if (choice === "paper" ) {
        switch (computerChoice.word){
            case "rock":
                resultDisplay.textContent = "You Win!";
                wins++;
                break;
            case "sissors":
                resultDisplay.textContent = "Computer Wins";
                break;
            case "paper":
                resultDisplay.textContent = "Its a Tie";
                ties++;
                break;
        }
    }
    if (choice === "sissors" ) {
        switch (computerChoice.word){
            case "rock":
                resultDisplay.textContent = "Computer Wins";
                break;
            case "sissors":
                resultDisplay.textContent = "Its a Tie";
                ties++;
                break;
            case "paper":
                resultDisplay.textContent = "You Win!";
                wins++;
                break;
        }
    }

    resultDisplay.classList.remove("greenText","redText");
    switch(resultDisplay.textContent){
        case "You Win!" :
            resultDisplay.classList.add("greenText");
            break;
        case "Computer Wins" :
            resultDisplay.classList.add("redText");
            break;

    }



    scoreDisplay.textContent = `Score:  ${played} games played, ${wins} (${Math.floor((wins/played)*100)}%)wins and ${ties} games tied`;
}