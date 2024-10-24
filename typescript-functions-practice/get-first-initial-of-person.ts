/* exported getFirstInitialOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

const mickey: Person = {
  firstName: 'mickey',
  lastName: 'mouse',
};

function getFirstInitialOfPerson(person: Person): string {
  return person.firstName[0];
}

console.log(getFirstInitialOfPerson(mickey));
