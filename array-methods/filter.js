'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
function isEven(num) {
  return num % 2 === 0;
}
const evens = numbers.filter(isEven);
console.log('evens:', evens);
function withoutD(name) {
  return !name.toLowerCase().includes('d');
}
const noDnames = names.filter(withoutD);
console.log('noD:', noDnames);
