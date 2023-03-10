class Calculator {
  operation(num1, num2, operation) {
    switch (operation) {
      case "add":
        return num1 + num2;
      case "sub":
        return num1 - num2;
      default:
        return NaN;
    }
  }
}

// Refactorizacion

class NewCalculator {
  add(num1, num2) {
    return num1 + num2;
  }

  res(num1, num2) {
    return num1 - num2; 
  }

  div(num1, num2) {
    return num1 / num2;
  }
}

//Aplicando el desing pattern "adapter"

class AdapterCalculator {
    constructor(){
        this.calculator = new NewCalculator();
    }

    operation(num1, num2, operation){
        switch(operation){
            case 'add':
                return this.calculator.add(num1, num2);
            case 'sub':
                return this.calculator.res(num1, num2);
            case 'div':
                return this.calculator.div(num1, num2);
            default :
                return NaN;
        }
    }
}

//Test 

const calculator = new Calculator();
const sum = calculator.operation(1, 2, "add");
console.log(sum);

const newCalculator = new NewCalculator();
const sum1 = newCalculator.add(1, 2);
console.log(sum1);

const adapterCalculator = new AdapterCalculator();
const sum2 = adapterCalculator.operation(1, 2, 'add');
console.log(sum2);