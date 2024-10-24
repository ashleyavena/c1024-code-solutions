'use strict';
const heroes = ['wonder woman', 'cat woman', 'poison ivy', 'black widow'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('random index from heroes array:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('random hero from array:', randomHero);
const library = [
  {
    title: 'The Art of War',
    author: 'Sun Tzu',
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyers',
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
  },
];
const lastBook = library.pop();
console.log('pop method, last book in array:', lastBook);
const firstBook = library.shift();
console.log('shift method, first book in array', firstBook);
const js = {
  title: 'The Great Gatsby',
  author: 'Fitzgerald',
};
const css = {
  title: 'A Tale of Two Cities',
  author: 'Charles Dickens',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of the library:', library);
const fullName = 'Ashley Avena';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
// split () splits a string into an array of strings that is why we can access it using [0]//
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
const employee = {
  name: 'spongebob',
  age: 19,
  position: 'frycook',
};
const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('value of employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('value of employeePairs:', employeePairs);
