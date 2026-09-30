console.log("Calculator script loaded.");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "Error";
    }
}

const display = document.querySelector(".display");

const operatorButtons = document.querySelectorAll(".operator");

const digitButtons = document.querySelectorAll(".digit");

digitButtons[0].addEventListener("click", function() {
    console.log("7 was clicked");
});

operatorButtons[3].addEventListener("click", function() {
    console.log("+ was clicked");
});