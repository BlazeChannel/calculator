let display= document.getElementById("calculator-screen");
let currentValue= '';
let lastValue='';

function inputDigit(digit) {
    if(currentValue === '' && digit === '0') return;
    currentValue += digit;
    display.value= currentValue;
    lastValue= 'digit';
    console.log(digit);
}

function handleOperator(operator) {
    if(currentValue === '' || lastValue === 'operator') return;
    currentValue += '' + operator + '';
    display.value= currentValue;
    lastValue = 'operator';
    console.log(operator)
};

function resetCalculator() {
    currentValue= '';
    display.value= '0';
    lastValue= '';
}
function equalSign(){
   try{
    let result= eval(currentValue);
    display.value=result;
    currentValue= result.toString();
    console.log();
}
catch {
    display.value= '';
    currentValue='';
}
}