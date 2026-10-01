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

operatorButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log(button.textContent + " was clicked");
  });
});

digitButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (display.textContent === "0") {
      display.textContent = button.textContent;
    } else {
      display.textContent = display.textContent + button.textContent;
    }
  });
});

