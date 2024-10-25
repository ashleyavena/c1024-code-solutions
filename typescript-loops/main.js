'use strict';
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
function getNumbersToTen() {
  let currentNumber = 1;
  const numbers = [];
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('get numbers to ten:', getNumbersToTen());
function getEvenNumbersToTwenty() {
  let currentNumber = 2;
  const evenNumbers = [];
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('get even numbers to twenty:', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = ' ';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeat word:', repeatWord('ashley', 3));
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
logEachCharacter('i like dogs)');
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('double all [1,2,3]:', doubleAll([1, 2, 3]));
function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log('sum array[1,2,3]:', sumArray([1, 2, 3]));
function reverseString(str) {
  let reversed = ' ';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log('i am ', reverseString('desserts'));
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log('get keys:', getKeys({ name: 'ashley', age: 23 }));
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log('get values:', getValues({ name: 'ashley', age: 23 }));
