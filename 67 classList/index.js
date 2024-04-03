/*
classList   =   Element property in javascript used to interact with an element's   
                List of classes (CSS classes).
                Allowing you to make reusable classes for many elements
                accross your webpage.
*/

// add()
// remove()
// toggle(Remove if present. Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");
myButton.classList.add("enabled");

myButton.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
});
myButton.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
});

myButton.classList.replace("enabled", "disabled");


myH1.classList.add("enabled");