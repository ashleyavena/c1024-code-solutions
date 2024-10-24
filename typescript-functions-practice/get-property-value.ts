/* exported getPropertyValue */
interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

const Harry: Person = {
  name: 'Harry Potter',
  occupation: 'wizard',
  birthPlace: 'England',
};

function getPropertyValue(object: Person, key: string): any {
  return object[key];
}
console.log(getPropertyValue(Harry, 'occupation'));
