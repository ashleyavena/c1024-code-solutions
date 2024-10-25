/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  let currentNumber: number = 1;
  const numbers: number[] = [];
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('get numbers to ten:', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  let currentNumber: number = 2;
  const evenNumbers: number[] = [];
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('get even numbers to twenty:', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = ' ';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeat word:', repeatWord('ashley', 3));

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
logEachCharacter('i like dogs)');

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('double all [1,2,3]:', doubleAll([1, 2, 3]));

function sumArray(numbers: number[]): number {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log('sum array[1,2,3]:', sumArray([1, 2, 3]));

function reverseString(str: string): string {
  let reversed: string = ' ';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log('i am ', reverseString('desserts'));

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log('get keys:', getKeys({ name: 'ashley', age: 23 }));

function getValues(obj: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log('get values:', getValues({ name: 'ashley', age: 23 }));
