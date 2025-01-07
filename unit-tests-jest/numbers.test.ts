import { evenNumbers, toDollars, multiplyBy, divideBy } from './numbers';

test('even numbers', () => {
  const numbers = [1, 4, 5, 10, 0];
  const result = evenNumbers(numbers);
  expect(result).toEqual([4, 10, 0]);
});

test('even numbers empty array', () => {
  const numbers = [1, 5, 9];
  const result = evenNumbers(numbers);
  expect(result).toEqual([]);
});

test('to dollars', () => {
  const number = 10;
  const result = toDollars(number);
  expect(result).toEqual('$10.00');
});

test('to dollars with change ', () => {
  const number = 10.5;
  const result = toDollars(number);
  expect(result).toEqual('$10.50');
});

test('divide by', () => {
  const numbers = [3, 6, 9];
  const divisor = 3;
  const result = divideBy(numbers, divisor);
  expect(result).toEqual([1, 2, 3]);
});

test('multiply by', () => {
  const value = { a: 5, b: 'hello', c: 10 };
  const multiplier = 2;
  const result = multiplyBy(value, multiplier);
  expect(result).toEqual({ a: 10, b: 'hello', c: 20 });
});

test('multiplyBy should handle objects with no numeric values', () => {
  const value = { a: 'hello', b: true };
  const multiplier = 3;
  const output = multiplyBy(value, multiplier);
  expect(output).toEqual({ a: 'hello', b: true });
});
