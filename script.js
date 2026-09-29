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

function operate(z, x, y) {
    if (z === "+") {
        return add(x, y);
    } else if (z === "-") {
        return subtract(x, y);
    } else if (z === "*") {
        return multiply(x, y);
    } else if (z === "/") {
        return divide (x, y);
    } else {
        return "Error";
    }
}