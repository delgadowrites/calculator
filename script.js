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

function sayHello(language) {
  if (language === "es") {
    return "Hola";
  } else if (language === "fr") {
    return "Bonjour";
  } else {
    return "Hello";
  }
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