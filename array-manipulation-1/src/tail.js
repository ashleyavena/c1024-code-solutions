'use strict';
/* exported tail */
function tail(array) {
  const afterFirstIndex = [];
  for (let i = 1; i < array.length; i++) {
    afterFirstIndex.push(array[i]);
  }
  return afterFirstIndex;
}
