const Calculator = require('./calculator.js');

const Calc = new Calculator();

describe('addition', () => {
  test('add two integers', () => {
    expect(Calc.add(1, 2)).toBe(3);
  });

  test('add two zeros', () => {
    expect(Calc.add(0, 0)).toBe(0);
  });

  test('add two negative numbers', () => {
    expect(Calc.add(-10, -20)).toBe(-30);
  });
});

describe('subtraction', () => {
  test('subtract two integers', () => {
    expect(Calc.subtract(1, 2)).toBe(-1);
  });

  test('subtract two zeros', () => {
    expect(Calc.subtract(0, 0)).toBe(0);
  });

  test('subtract two negative numbers', () => {
    expect(Calc.subtract(-10, -20)).toBe(10);
  });
});

describe('multiplication', () => {
  test('multiply two integers', () => {
    expect(Calc.multiply(1, 2)).toBe(2);
  });

  test('multiply two zeros', () => {
    expect(Calc.multiply(0, 0)).toBe(0);
  });

  test('multiply two negative numbers', () => {
    expect(Calc.multiply(-10, -20)).toBe(200);
  });
});

describe('division', () => {
  test('divide two integers', () => {
    expect(Calc.divide(1, 2)).toBe(0.5);
  });

  test('divide two zeros', () => {
    expect(Calc.divide(0, 0)).toBe(NaN);
  });

  test('divide negative numbers', () => {
    expect(Calc.divide(-10, -20)).toBe(0.5);
  });
});