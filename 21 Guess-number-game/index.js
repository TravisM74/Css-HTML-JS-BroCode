// html elements
const infoHeader = document.getElementById("info-h2")
const guessInput = document.getElementById("number-input");
const hintP = document.getElementById("hint-p");
const outputP = document.getElementById("response-p");
const submitBtn = document.getElementById("guess-button");
const newGameBtn = document.getElementById("new-game-btn");


const minNum = 1;
const maxNum = 100;
let lowGuess = minNum ;
let highGuess = maxNum ;
let attempts = 0;
let guessedIt = false;

const answer =  Math.floor(Math.random() * (maxNum - minNum) +1)+ minNum;
infoHeader.textContent = `Guess the number between ${minNum} and ${maxNum}`;

function newGame(){
    const answer =  Math.floor(Math.random() * (maxNum - minNum) +1);
    infoHeader.textContent = `Guess the number between ${minNum} and ${maxNum}`;
    let lowGuess = minNum ;
    let highGuess = maxNum ;
    hintP.textContent = ``;
    outputP.textContent ="";
    attempts = 0;
    guessedIt = false;
}

function playRound(){
    if (guessInput.value == answer){
        if (!guessedIt) {
            outputP.textContent =`You guessed the number ${answer}!`;
            attempts++;
            guessedIt = true;
            hintP.textContent = `It took ${attempts} attempts`;
        }
    } else if(guessInput.value > answer) {
        if (!guessedIt) {
            attempts++;
            outputP.textContent ="You guessed to high !";
            highGuess=guessInput.value;
            hintP.textContent = `between ${lowGuess} and ${highGuess}`;
        }
    } else {
        if (!guessedIt) {
            attempts++;
            outputP.textContent ="You guessed to Low !";
            lowGuess=guessInput.value;
            hintP.textContent = `between ${lowGuess} and ${highGuess}`;
        }
        
    }
};

submitBtn.onclick=(playRound);
newGameBtn.onclick=(newGame);
