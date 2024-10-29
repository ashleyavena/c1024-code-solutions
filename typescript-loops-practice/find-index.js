'use strict';
/* exported findIndex */
function findIndex(array, values) {
  for (let i = 0; i < array.length; i++) {
    if (values === array[i]) {
      return i;
    }
  }
  return -1;
}
// [1, 5, 3] and 5, and returns 1"
// // findIndex([9, 8, 3], 4);
// // -1
