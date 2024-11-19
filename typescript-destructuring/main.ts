interface Book {
  title: string;
  author: string;
  libraryId: number;
}

const book1: Book = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};

const { title, author, libraryId } = book1;

console.log(
  `the title of the book is ${title}, the author is ${author}, and the library id is ${libraryId}`
);

const book2: Book = {
  title: 'Les Fleurs de mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};

const { title: bookName, author: writer, libraryId: bookNumber } = book2;
console.log(
  `The title of the book is ${bookName}, the author of the book is ${writer}, and the library id is ${bookNumber}`
);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];

const [a, b, c, d] = library;

console.log('Books in library', a, b, c, d);

const book3 = library[0];
const book4 = library[1];
const book5 = library[2];

console.log('book 3:', book3);
console.log('book 4:', book4);
console.log('book 5:', book5);

const [, , , book6] = library;
console.log('book 6:', book6);
