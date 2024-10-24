function convertMinutesToSeconds(minutes: number): number {
  const result: number = minutes * 60;
  return result;
}
convertMinutesToSeconds(2);
console.log('2 minutes converted To Seconds :', convertMinutesToSeconds(2));

function greet(name: string): string {
  const greeting: string = `hey ${name}`;
  return greeting;
}
greet('ashley');
console.log('greetings:', greet('ashley'));

const getArea = (width: number, height: number): number => {
  return width * height;
};

console.log('get the area of 3 and 5 =', getArea(3, 5));

interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'ashley',
  lastName: 'avena',
};

const getFirstName = (person: Person): string => {
  const getFirstNameResult: string = person.firstName;
  return getFirstNameResult;
};

console.log('the first name is:', getFirstName(person));

const getLastElement = (
  array: string[] = ['hydrogen', 'helium', 'carbon']
): string => array[array.length - 1];

console.log('the last element in the array is:', getLastElement());

function callOtherFunctions(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log(callOtherFunctions(convertMinutesToSeconds, 10));
