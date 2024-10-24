/* exported getLastNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'ashley',
  lastName: 'avena',
};

function getLastNameOfPerson(person: Person): string {
  const getLastNameResult: string = person.lastName;
  return getLastNameResult;
}

console.log("the person's last name is:", getLastNameOfPerson(person));
