'use strict';
const bookshelf = [
  {
    isbn: '12345',
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck ',
  },
  {
    isbn: '24678',
    title: 'The DaVinci Code',
    author: 'Italian Dude ',
  },
  {
    isbn: '56789',
    title: 'MineCraft',
    author: 'Markus Notch Persson ',
  },
];
console.log('bookshelf', bookshelf, typeof bookshelf);
const json = JSON.stringify(bookshelf);
console.log('json:', json, typeof json);
const studentJSON = '{"numberID": 4521, "stringName": "Alice Jones"}';
console.log('studentJSON', studentJSON, typeof studentJSON);
const parsed = JSON.parse(studentJSON);
console.log('parsed:', parsed, typeof parsed);
