'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      !Number.isNaN(array[i]) &&
      array[i] !== undefined &&
      array[i] !== 0 &&
      array[i] !== ''
    ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// function recommendMovie(genre: string): string {
//   switch (genre) {
//     case 'action':
//       return 'Die hard';
//     case 'comedy':
//       return 'The Big Lebowski';
//     case 'horror':
//       return 'Scream';
//     case 'drama':
//       return 'The Notebook';
//     case 'musical':
//       return 'Grease';
//     case 'sci-fi':
//       return 'Star Wars';
//     default:
//       return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
//   }
// }
// function compact(array: any[], type: any): unknown {
//   const newArray = [];
//   for (const value of array){
//     switch (type){
//       case false:
//       if (typeof value !=== false){
//         newArray.push(value);
//       }
//     } break;
//   }
