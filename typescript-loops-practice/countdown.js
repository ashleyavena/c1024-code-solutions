'use strict';
/* exported countdown */
function countdown(num) {
  let index = num;
  const fluff = [];
  while (index >= 0) {
    fluff.push(index);
    index--;
  }
  return fluff;
}
console.log(countdown(10));
