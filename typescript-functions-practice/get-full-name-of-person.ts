/* exported getFullNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person: Person): string {
  const getFullNameResult: string = person.firstName + ' ' + person.lastName;
  return getFullNameResult;
}
