/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

const minnie: Person = {
  firstName: 'minnie',
  lastName: 'mouse',
};

function getInitialsOfPerson(person: Person): string {
  return person.firstName[0] + person.lastName[0];
}

console.log(getInitialsOfPerson(minnie));
