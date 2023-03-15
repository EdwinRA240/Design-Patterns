// Estrategias
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// Contexto
class Calculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute(a, b) {
    return this.strategy(a, b);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
}

// Ejemplo de uso
const calculator = new Calculator(add);
console.log(calculator.execute(2, 3)); // Output: 5

calculator.setStrategy(subtract);
console.log(calculator.execute(3, 2)); // Output: 1

calculator.setStrategy(multiply);
console.log(calculator.execute(2, 4)); // Output: 8
