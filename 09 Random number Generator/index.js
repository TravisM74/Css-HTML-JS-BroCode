

const displayLabel1= document.getElementById("display-label1");
const displayLabel2= document.getElementById("display-label2");
const displayLabel3= document.getElementById("display-label3");
const rollBtn = document.getElementById("roll-button");

function rollDice(){
    displayLabel1.textContent = getRoll();
    displayLabel2.textContent = getRoll();
    displayLabel3.textContent = getRoll();
}

function getRoll(){
        return Math.floor(Math.random() * 6)+1;
}

rollBtn.onclick = rollDice;