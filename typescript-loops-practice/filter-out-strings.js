'use strict';
/* exported filterOutStrings */
// function filterOutStrings(values: []): any[] {
//   const filteredStrings: any = [];
//   for (i = 0; i < values.length; i++) {
//     if (values[i] !== ' ') {
//       filteredStrings.push(values[i]);
//     }
//     return filteredStrings;
//   }
// }
function filterOutStrings(values) {
  const filteredStrings = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filteredStrings.push(values[i]);
    }
  }
  return filteredStrings;
}
//
// filterOutStrings([1, 'a', 'b', 2, 3, 'c']);
// // [1, 2, 3]
