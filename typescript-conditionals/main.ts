/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('is the value 4 less than 5?:', isUnderFive(4));
console.log('is the value 7 less than 5?:', isUnderFive(7));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('is the number 121 even?:', isEven(121));

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('does Jerry start with a J?:', startsWithJ('Jerry'));
console.log('does Hannah start with a J?:', startsWithJ('Hannah'));

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'ashley',
  age: 21,
};

function isOldEnoughToDrink(person: Person): any {
  if (person.age >= 21) {
    return true;
  } else if (person.age < 21) {
    return false;
  }
}

console.log('is ashley old enough to drink?:', isOldEnoughToDrink(person));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('is ashley old enough to drive?:', isOldEnoughToDrive(person));

function isOldEnoughToDrinkAndDrive(person: Person): any {
  if (person.age > 0) {
    return false;
  }
}

console.log(
  'are they old enough to drink and drive?',
  isOldEnoughToDrinkAndDrive(person)
);

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'basic';
  } else {
    return 'invalid pH level';
  }
}

console.log('what is 14 pH?:', categorizeAcidity(14));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers";
    case 'wakko':
      return "We're the warner brothers";
    case 'dot':
      return "I'm cute!";
    default:
      return 'Goodnight everybody!';
  }
}

console.log('wakko says:', introduceWarnerBro('wakko'));

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Scream';
    case 'drama':
      return 'The Notebook';
    case 'musical':
      return 'Grease';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}

console.log('a good musical movie?', recommendMovie('musical'));
