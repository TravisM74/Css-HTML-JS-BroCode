/*
JSON =  (Javascript Object Notation) data-interchange format
        Used for exchanging data between a server and a web application
        JSON files {key:value} or [value1, value2 , value3]

        JSON.stringify() =  convert a JS object to a JSON string.
        JSON.parse() =      converts a JSON string to a JS object     
*/


const names = ["Spungebob","Patrick","Squidward","Sandy"];
const jsonString = JSON.stringify(names);
console.log (names);
console.log (jsonString);

const person = {
    "name":"Spbungebob",
    "age": 30,
    "isEmployed": true,
    "hobbies":["jellyFishing","karate","cooking"]
};

const jsonPerson = JSON.stringify(person);
// object
console.log(person);
// string representation of object
console.log (jsonPerson);
// string representation  parsed back to an object.
console.log (JSON.parse(jsonPerson));


const people = [{
    "name":"Spungebob",
    "age": 30,
    "isEmployed": true
},{
    "name":"Patrick",
    "age": 34,
    "isEmployed": false
},{
    "name":"Squidward",
    "age": 50,
    "isEmployed": true
},{
    "name":"Sandy",
    "age": 27,
    "isEmployed": false
}];

const jsonPeople = JSON.stringify(people);
console.log(people);
console.log (jsonPeople);

// fetching a file 

fetch("people.json")
    .then(obj => obj.json())
    .then(values => values.forEach(element => {
        console.log(element.name);
    })
);
    

