import operate from '../components/logic/operate';

describe('operate two numbers', () => {
  test('adds 1 and 2 expects 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('substract 1 from 3 expect 2', () => {
    expect(operate(3, 1, '-')).toBe('2');
  });
  test('multiply 2 and 2 expect 4', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('divide 2 and 2 expect 1', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
});
