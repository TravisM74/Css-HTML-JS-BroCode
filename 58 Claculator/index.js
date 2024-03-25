//
const display = document.getElementById("display");

function appendToDispay(inputValue) {
    display.value += inputValue;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value="Error"
    }
    finally{

    }
}