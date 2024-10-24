/* exported getLastNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
  name: string;
  occupation: string;
  birthPlace: string;
}

function getLastNameOfPerson(person: Person): string {
  const getLastNameResult: string = person.lastName;
  return getLastNameResult;
}
