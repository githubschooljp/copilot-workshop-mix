import { calculate } from './components/Calculator';

describe('calculate function tests', () => {
  it('should add 1 + 2 to equal 3', () => {
    expect(calculate(1, 2, '+')).toEqual(3);
  });

  it('should subtract 5 - 2 to equal 3', () => {
    expect(calculate(5, 2, '-')).toEqual(3);
  });

  it('should multiply 2 * 3 to equal 6', () => {
    expect(calculate(2, 3, '*')).toEqual(6);
  });

  it('should divide 8 / 4 to equal 2', () => {
    expect(calculate(8, 4, '/')).toEqual(2);
  });

});