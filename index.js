//next steps, have better interface for showing current operations, control structure allowing multi-digit numbers, implement reset, handle invalid operation sequences, style
//future implementation: decimal support, and use a data structure to allow an arbitrary amount of numbers and operators in a single line, rather than just 2 numbers and 1 operator

function increment(elementID){
    //var output = document.getElementById('result');
    result++;
    output.innerHTML = result; 
    console.log(result);
}

function reset() {
    result = 0;
    num1 = 0;
    num2 = 0;
    currOp = null;
    calculation.value = "";
    output.innerHTML = 0;
}

function selectNum(num) {
    if (currOp == null) {
        if (result !== 0) {
            console.log("attempting erase of calc");
            num1 = 0;
            calculation.value = "";
        }
        num1 = num1*10 + num //allows multi-digit inputs
    } else {
        num2 = num2*10 + num;
    }
    calculation.value += num;
}

function selectOp(operator) {
    num2 = 0; //resetting num2 for new op
    currOp = operator;
    calculation.value = num1 + operator;
}

function eval() {
    if (currOp == "+") {
        result = num1+num2;
    } else if (currOp == "-") {
        result = num1-num2;
    } else if (currOp == "*") {
        result = num1*num2;
    } else if (currOp == "/") {
        result = num1/num2;
    }
    num1 = result
    //var output = document.getElementById('result');
    output.innerHTML = result;
    calculation.value = num1
    currOp = null;

}

var result = 0;
let num1 = 0;
let num2 = 0;
var currOp;
let calculation = document.getElementById('calculation')
let output = document.getElementById('result');

