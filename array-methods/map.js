'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const object = prices.map((price) => ({
  originalPrice: price,
  salesPrice: price / 2,
}));
console.log(object);
const formattedPrice = prices.map((price) => `$${price.toFixed(2)}`);
console.log(formattedPrice);
// map() creates a new array populated with the results of calling a provided function on every element
// const newArray= arr.map(callback(currentValue, index, array), thisArg)
// this method does not mutate the array but returns a new one, the callback function has to mutate is
