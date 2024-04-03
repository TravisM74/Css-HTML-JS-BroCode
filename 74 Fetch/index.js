/*
fetch = Function used for making HTTP requests to fetch resources.
        (JSON style data, images, files)
        Simplifies asyncronus data fetching in javascript and
        used for interacting with API's to retrieve and send 
        data asyncronusly over the web.
        fetch(url, {options})
*/

fetchDataMethod2();

function fetchDataMethod1(){
    const pokemonName = document.getElementById("pokemoneName").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    
    })
    .then(data => {
        console.log(data)
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src= pokemonSprite;
        imgElement.style.display = "block";  
    })
    .catch(error => console.error(error));

}

async function fetchDataMethod2(){
    try{
        const pokemonName = document.getElementById("pokemoneName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src= pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){ 
        console.error(error);
    }
}

function fetchData(){
    fetchDataMethod1();
}



