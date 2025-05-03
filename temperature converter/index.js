const textbox=document.getElementById("textbox");
const tofahren=document.getElementById("tofahren");
const tocelsius=document.getElementById("tocelsius");
const para=document.getElementById("para");
let temp;

function convert(){
    if(tofahren.checked){
        temp=Number(textbox.value);
        temp=temp*9/5 +32;
        para.textContent=temp.toFixed(1)+" fahrenheit";
    }
    else if(tocelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        para.textContent=temp.toFixed(1)+" celcius";

    }
    else{
        para.textContent="please enter a value";
    }


}
