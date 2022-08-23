class Calculator {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  }

  add = (firstValue, secondValue) => firstValue + secondValue;

  subtract = (firstValue, secondValue) => firstValue - secondValue;

  divide = (firstValue, secondValue) => firstValue / secondValue;

  multiply = (firstValue, secondValue) => firstValue * secondValue;
}

module.exports = Calculator;