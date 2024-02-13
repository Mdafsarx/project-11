function Ellipse(){
const a=getInputValue('Ellipsea');
const b=getInputValue('Ellipseb');

let area=Math.PI * a * b ;
area=parseFloat(area).toFixed(2)
areaInnerText('EllipseOutput',area)

}