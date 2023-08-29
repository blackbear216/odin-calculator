//implement buttons greying out where appropriate
//implement floating point . numbers
//implement divide by 0 error
//implement keyboard support



const operators = ['/', '*', '-', '+'];
let result = 0;
let displayValue = "";
let operations = [];
let currentNum = "";

const display = document.querySelector('.display-text');

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
    display.textContent = displayValue;
}

function getResult() {
    parseDisplayValue();
    console.log(operations);
    resolveOperations('/', '*');
    console.log(operations);
    resolveOperations('-', '+');
    console.log(operations);
    operations = operations.filter(removeOperators);
    console.log(operations);
    result = operations.reduce(getSum, 0);
    console.log(result);

    displayValue = String(result);
    display.textContent = displayValue;

    operations = [];
}

function getSum(total, num) {
    return total + Math.round(num);
}

function removeOperators(element) {
    if (operators.includes(element)) {
        return false;
    } else {
        return true;
    }
}

function resolveOperations(operator1, operator2) {
    while (operations.includes(operator1)
    || operations.includes(operator2)) {
        for (let i = 0; i < operations.length; i++) {
            if (operations[i+1] == operator1 
                || operations[i+1] == operator2) {
                    operations[i] = operate(
                        Number(operations[i]), 
                        operations[i+1], 
                        Number(operations[i+2]));
                        operations[i+1] = 'f';
                        operations[i+2] = 'f';
                        break;
                }
        }
        operations = operations.filter((op) => {
            return (op != 'f');
        });
    }
}

function parseDisplayValue() {
    let currentEntry = "";
    for (let i = 0; i < displayValue.length; i++) {
        if (!(operators.includes(displayValue[i]))) {
            currentEntry = currentEntry.concat(displayValue[i]);
        } else {
            operations.push(currentEntry);
            operations.push(displayValue[i]);
            currentEntry = "";
        }
    }
    operations.push(currentEntry);
}

function undo() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    console.log(displayValue);
    display.textContent = displayValue;
}

function clearScreen() {
    displayValue = "";
    display.textContent = displayValue;
}