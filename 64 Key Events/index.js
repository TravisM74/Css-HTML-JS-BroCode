// eventListener 
//      events: keydown, keyup , keypress
//      .addEventListener(event, (callback, arrow function , anonamus function));


const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", event =>{
    if (event.key.startsWith("Arrow")){
        event.preventDefault();
        myBox.textContent = "😮";
        myBox.style.backgroundColor = "orange";
        switch (event.key){
            case "ArrowUp" :
                y -= moveAmount;
                break;
            case "ArrowDown" :
                y += moveAmount;
                break;
            case "ArrowLeft" :
                x -= moveAmount;
                break;
            case "ArrowRight" :
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }

});

document.addEventListener("keyup", event =>{
    console.log(`keyup: ${event.key}`);
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightgreen";
});

