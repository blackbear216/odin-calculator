function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNum = 0;
let operator = "+";
let secondNum = 0;
let displayValue = "";
let operation = [];
let lastKey = "operator";

const display = document.querySelector('.display-text');

function operate(firstNum, operator, secondNum) {
    if (operator == "+") {
        return add(firstNum, secondNum);
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else if (operator == "/") {
        return divide(firstNum, secondNum);
    }
}

function clickButton(key) {
    displayValue = displayValue.concat(key);
    operation.push(key);
    display.textContent = displayValue;
}




