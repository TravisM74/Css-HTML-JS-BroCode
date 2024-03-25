// html elements

// destructuing Arrays 

const colors = ["red", "Green", "blue", "black", "white"];
// take the 2 to swap = Swap them
[colors[0],colors[4]] = [colors[4], colors[0]];

console.log (colors);

// destructuring variables
//assign the variable names to the values in the array
// ...extraColors assigns the remaing colors to an array called extracolors
const[firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log (firstColor);
console.log (secondColor);
console.log (thirdColor);
console.log (extraColors);

//Extract Values from objects 
const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
   
}
// make a lest of the properite variables and assign them to the object
// by adding ="something" can set a default value if a property is missing
const {firstName, lastName, age, job ="unempolyed"} = person2;
console.log(firstName);

console.log(lastName);
console.log(age);
console.log(job);

// Destructure function parameters
function displayPerson({firstName,lastName,age,job ="unemployed"}){
    console.log("name: "+firstName);
    console.log("job : " + job);
}

displayPerson(person1);
displayPerson(person2);