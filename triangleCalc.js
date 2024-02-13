 
document.getElementById('CalculateTriangle').addEventListener('click',()=>{

const base=getInputValue('triangleBase');
const height=getInputValue('triangleHight');
const area=0.5*base*height;
 
areaInnerText('areaOutput',area)

})

