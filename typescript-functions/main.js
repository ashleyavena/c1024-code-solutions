'use strict';
function convertMinutesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
convertMinutesToSeconds(2);
console.log('2 minutes converted To Seconds :', convertMinutesToSeconds(2));
function greet(name) {
  const greeting = `hey ${name}`;
  return greeting;
}
greet('ashley');
console.log('greetings:', greet('ashley'));
const getArea = (width, height) => {
  return width * height;
};
console.log('get the area of 3 and 5 =', getArea(3, 5));
const person = {
  firstName: 'ashley',
  lastName: 'avena',
};
const getFirstName = (person) => {
  const getFirstNameResult = person.firstName;
  return getFirstNameResult;
};
console.log('the first name is:', getFirstName(person));
const getLastElement = (array = ['hydrogen', 'helium', 'carbon']) =>
  array[array.length - 1];
console.log('the last element in the array is:', getLastElement());
function callOtherFunctions(otherFunction, params) {
  return otherFunction(params);
}
console.log(callOtherFunctions(convertMinutesToSeconds, 10));
