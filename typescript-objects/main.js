'use strict';
const student = {
  firstName: 'Ashley',
  lastName: 'Avena',
  age: 23,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'babysitter';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
const vehicle = {
  make: 'Mercedes',
  model: 'Maybach',
  year: 2020,
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']: ", vehicle['color']);
console.log('value of [isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('type of vehicle:', typeof vehicle);
const pet = {
  name: 'wishbone',
  kind: 'poodle',
};
delete pet.name;
delete pet['kind'];
console.log('value of pet:', pet);
console.log('type of pet:', typeof pet);
