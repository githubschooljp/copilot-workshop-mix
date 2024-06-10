const { CalculatorLogic } = require('./Calculator'); // Calculator.jsからcalculate関数をインポート

describe('Calculator', () => {
  test('addition', () => {
    expect(calculate('1+2=')).toBe('3');
  });

  test('subtraction', () => {
    expect(calculate('5-2=')).toBe('3');
  });

  test('multiplication', () => {
    expect(calculate('2*3=')).toBe('6');
  });

  test('division', () => {
    expect(calculate('6/2=')).toBe('3');
  });

  test('division by zero', () => {
    expect(() => calculate('1/0=')).toThrow('Error: Division by zero');
  });
});