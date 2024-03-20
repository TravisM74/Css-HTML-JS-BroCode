

const decBtn = document.getElementById("dec-button");
const resetBtn = document.getElementById("reset-button");
const incBtn = document.getElementById("inc-button");
const countLabel = document.getElementById("count-label");
let count = 0;

function decCount (){
    count--;
}
function resetCount(){
    count = 0;
}
function incCount(){
    count++;
}
function updateCount(number){
    countLabel.textContent = number;
}

decBtn.onclick= function() {
    decCount();
    updateCount(count);
}
incBtn.onclick= function() {
    incCount();
    updateCount(count);
}
resetBtn.onclick= function (){
    count = 0;
    updateCount(count);
}