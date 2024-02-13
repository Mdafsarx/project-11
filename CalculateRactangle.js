document.getElementById('CalculateRactangle').addEventListener('click',function(){

const Length=getInputValue('rectangleInputLength');
const width=getInputValue('rectangleInputWidth')

const area=Length * width;
areaInnerText('rectangleOutput',area)




})



function getInputValue(inputId){

const inputValue=document.getElementById(inputId).value;
const value=parseInt(inputValue);
document.getElementById(inputId).value='';
return value;

}

function areaInnerText(outputId=0,area){

    const output=document.getElementById(outputId);
    output.innerText=area
    const areaCalculation=document.getElementById('output');
    const p=document.createElement('p');
    p.innerText='Ans: '+area;
    areaCalculation.appendChild(p)

}





