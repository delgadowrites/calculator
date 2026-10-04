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
  if (y === 0) {
    return "Error";
  } else {
    return x / y;
  }
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "×") {
    return multiply(a, b);
  } else if (operator === "÷") {
    return divide(a, b);
  } else {
    return "Error";
  }
}

const display = document.querySelector(".display");

const operatorButtons = document.querySelectorAll(".operator");

const digitButtons = document.querySelectorAll(".digit");

let firstNumber = null;

let currentOperator = null;

let startNewNumber = false;

operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentOperator !== null && startNewNumber === false) {
      const result = operate(currentOperator, Number(firstNumber), Number(display.textContent));
      display.textContent = result;
    }
    firstNumber = display.textContent;
    currentOperator = button.textContent;
    startNewNumber = true;
  });
});

digitButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (startNewNumber === true) {
      display.textContent = button.textContent;
      startNewNumber = false;
    } else if (display.textContent === "0") {
      display.textContent = button.textContent;
    } else {
      display.textContent = display.textContent + button.textContent;
    }
  });
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", function () {
  display.textContent = "0";
});

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", function () {
  if (currentOperator !== null) {
    const result = operate(currentOperator, Number(firstNumber), Number(display.textContent));
    display.textContent = result;
    currentOperator = null;
    startNewNumber = true;
  }
});

const decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener("click", function () {
  if (startNewNumber === true) {
    display.textContent = "0.";
    startNewNumber = false;
  } else if (display.textContent.includes(".") === false) {
    display.textContent = display.textContent + ".";
  }
});