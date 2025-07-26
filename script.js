const display=document.getElementById("display")
function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value=""
}
function calculateResult(){
    try{
    display.value=eval(display.value)
    }
    catch{
        display.value="Error"
    }
}
function square(){
    display.value=Math.pow(display.value,2);

}
function cube(){
    display.value=Math.pow(display.value,3);
}
function sqrt2(){
    display.value=Math.sqrt(display.value,1/2);
}
function sqrt3(){
   display.value=Math.sqrt(display.value,1/3);
}
