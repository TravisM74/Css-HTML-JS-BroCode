// *** step 1 Create the Element
const newH1 = document.createElement("h1");

// *** step 2 Add attribuets and properties
 newH1.textContent = "I like pizza";
 newH1.id = "myH1";
 newH1.style.color = "red";
 newH1.style.textAlign = "center";

// *** step 3 append element to dom
//document.body.append(newH1); // to the end of the element
// document.body.prepend(newH1); // to the begining of the element

document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

//const box2= document.getElementById("box2");
//document.body.insertBefore(newH1, box2);

//const boxs = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxs[2]);

// *** remove html element
document.getElementById("box1").removeChild(newH1);
document.body.removeChild(document.getElementById("box2"));



// *** new example
const newListItem = document.createElement("li");
newListItem.textContent = "cherry";
newListItem.id = "cherry";
newListItem.style.backgroundColor = "green";
// document.getElementById("fruits").append(newListItem);


const fruitlist = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, fruitlist[1]);

// document.getElementById("fruits").removeChild(newListItem);
