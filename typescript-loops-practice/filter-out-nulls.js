'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
// we want to insert an array and return a new array with no nulls
// filterOutNulls([7, 8, null, 9]);
// // [7, 8, 9]
