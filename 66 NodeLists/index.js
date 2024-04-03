// NodeList = Static collection of HTML elements by (id, .class, element)
//          can be created using querySelectorAll()
//          simkilar to an array, but no (map, filter, reduce)
//          NodeList wont update to automatically reflect changes




let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += `🤣`;
});

// Click Eventlistener 

buttons.forEach(button => {
    button.addEventListener("click" , (event) => {
        event.target.style.backgroundColor == "orange" ? 
        event.target.style.backgroundColor = "green" 
        : event.target.style.backgroundColor = "orange";
    });
});



//mouseover and mouseout

buttons.forEach(button =>{
    button.addEventListener("mouseover", (event) => {
        event.target.style.border = "3px solid black";
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", (event) => {
        event.target.style.border = "none";
    });
});

// Add a new button step 1 create the button
const newButton = document.createElement("button");
// step 2 - set attributes
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
// step 3 - append the child
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// removing an element
buttons.forEach(button => {
    button.addEventListener("click", (event) =>{
        event.target.remove(); 
        buttons = document.querySelectorAll(".myButtons");
    })
});