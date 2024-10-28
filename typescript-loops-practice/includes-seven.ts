/* exported includesSeven */

function includesSeven(array: any[]): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}

// includesSeven([77, 200, 700, '7']);

// function startsWithJ(string: string): boolean {
//   if (string[0] === 'J') {
//     return true;
//   } else {
//     return false;
//   }
// }
