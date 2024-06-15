const display = document.getElementById("display");

function displayVal(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";    
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error";
    }
}
function deleted(){
    display.value = display.value.toString().slice(0,-1);
}