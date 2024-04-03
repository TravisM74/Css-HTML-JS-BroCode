const myBtn = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click", (event) =>{
    
    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        event.target.textContent ="Hide";

    } else {
        myImg.style.visibility = "hidden";
        event.target.textContent ="Show";
        
    }
    
})

