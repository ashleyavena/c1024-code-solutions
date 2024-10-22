interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
const student: StudentProps = {
  firstName: 'Ashley',
  lastName: 'Avena',
  age: 23,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'babysitter';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'wishbone',
  kind: 'poodle',
};

delete pet.name;
delete pet['kind'];
console.log('value of pet:', pet);
console.log('type of pet:', typeof pet);
