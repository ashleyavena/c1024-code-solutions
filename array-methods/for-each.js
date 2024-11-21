'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((values) => {
  console.log(values);
});
console.log('serparation');
values.forEach((_, index) => {
  const reverse = values.length - 1 - index;
  console.log(reverse);
});
// Array.forEach(callback(currentValue, index, array), thisArg);
// currentValue = 'the current element being processed in the array';
// index;
// array: 'the array that forEach is being applied to ';
// const array1 = ['a', 'b', 'c'];
// array1.forEach((element) => console.log(element));
