'use strict';
/* exported initial */
function initial(array) {
  const exceptLast = [];
  for (let i = 0; i < array.length - 1; i++) {
    exceptLast.push(array[i]);
  }
  return exceptLast;
}
