// eventListener 
//      events: click, mouseover, mouseout
//      .addEventListener(event, callback, arrow function , anonamus function);


const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", event => {
    event.target.textContent = "Clicked me !!";
});

myBox.addEventListener("mouseover", event => {
    //event.target.style.backgroundColor = "orange";
    event.target.style.border = "5px solid black";
});

myBox.addEventListener("mouseout", event => {
    //event.target.style.backgroundColor = "green";
    event.target.style.border = "none";
    event.target.textContent = "Click me.";
});

function changeColor(event){
    console.log(event);
    event.target.style.backgroundColor == "red" ? 
                event.target.style.backgroundColor = "green" 
                : event.target.style.backgroundColor = "red" ;
    event.target.textContent = "Clicked me !!";

}


myButton.addEventListener("click", event => {
    myBox.textContent = "Clicked me !!";
});

myButton.addEventListener("mouseover", event => {
    //event.target.style.backgroundColor = "orange";
    myBox.style.border = "5px solid black";
});

myButton.addEventListener("mouseout", event => {
    //event.target.style.backgroundColor = "green";
    myBox.style.border = "none";
    myBox.textContent = "Click me";
});