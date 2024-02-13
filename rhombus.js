

document.getElementById('CalculateRhombus').addEventListener('click',function(){
    const d1=getInputValue('rhombusd1');
    const d2=getInputValue('rhombusd2');
    const area= (d1 * d2 ) / 2;
    areaInnerText('rhombusOutput',area)
})