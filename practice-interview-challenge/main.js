'use strict';
function getRangeReport(start, end) {
  let total = 0;
  const odds = [];
  const evens = [];
  const range = [];
  for (let index = start; index <= end; index++) {
    range.push(index);
    total += index;
    if (index % 2 !== 0) {
      odds.push(index);
    } else {
      evens.push(index);
    }
  }
  const average = total / range.length;
  return {
    total,
    odds,
    evens,
    range,
    average,
  };
}
console.log(getRangeReport(1, 10));
