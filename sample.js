textField1 = num1;
textField2 = num2;
textField3 = textResult;
button1 = buttonCompute;
button1 = buttonReset;

const firstNumber = document.getElementById("num1").value;
const secondNumber = document.getElementById("num2").value;
var result = 0;

function getSum(){
    const fNum = parseInt(num1.value, 10)
    const sNum = parseInt(num2.value, 10)

    result = fNum + sNum;

    document.getElementById("textResult").value = result;
}