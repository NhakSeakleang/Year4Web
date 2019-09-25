var firstValue = 0;
var memory = 0;
var operator = "";

function displayData(number) {
    var newNum = "";
    var oldNum = document.getElementById("display").innerHTML;
    if (oldNum.length <= 14) {
        if (oldNum == 0 && !oldNum.includes(".")) {
            newNum = number;
        }
        else {
            newNum = oldNum + number;
        }
    }
    else {
        newNum = oldNum;
    }
    document.getElementById("display").innerHTML = newNum;
}

function addDot() {
    var oldNum = document.getElementById("display").innerHTML;
    var newNum = "";
    if (!oldNum.includes(".") && oldNum.length <= 14) {
        newNum = oldNum + ".";
    }
    else {
        newNum = oldNum;
    }
    document.getElementById("display").innerHTML = newNum;
}

function saveNumber() {
    if (operator == ""){
        memory = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = 0;
    }
    else {
        document.getElementById("display").innerHTML = memory;
    }
}

function addOperator(newOperator) {
    firstValue = parseFloat(document.getElementById("display").innerHTML);
    var oldOperator = operator;
    if (oldOperator == ""){
        operator = newOperator;
    }
    else {
        cal();
    }
    document.getElementById("display").innerHTML = 0;
}

function cal() {
    var result = 0;
    var secondValue = parseFloat(document.getElementById("display").innerHTML);
    console.log("Operator: " + operator);
    console.log("FirstValue: " + firstValue);
    console.log("SecondValue: " + secondValue);
    switch(operator) {
        case "plus":
            result = firstValue + secondValue;
            break;
        case "minus":
            result = firstValue - secondValue;
            break;
        case "times":
            result = firstValue * secondValue;
            break;
        case "divide":
            result = firstValue / secondValue;
            break;
    }
    document.getElementById("display").innerHTML = result;
    firstValue = 0;
    operator = "";
}

function clearOne() {
    var oldNum = document.getElementById("display").innerHTML;
    var newNum = oldNum.substring(0, oldNum.length - 1);
    if (newNum == "") {
        newNum = 0;
    }
    document.getElementById("display").innerHTML = newNum;
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "0";
    firstValue = 0;
    memory = 0;
    operator = "";
}