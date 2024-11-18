interface Object {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}
// const object: Object ={
// total:
// odds:
// evens:,
// range:,
// average:
// }

function total(start: number, end: number): any {
  const totalArray = range(start, end);
  let sum = 0;
  for (let i = start; i < end; i++) {
    totalArray.push(i);
    sum = +totalArray[i];
  }
  return sum;
}
console.log(total(1, 5));

function odds(start: number, end: number): any {
  const oddsArray = range(start, end);
  for (const num in oddsArray) {
    if (num % 2 !== 0) {
      oddsArray.push(num);
    }
  }
  return oddsArray;
}

function evens(start: number, end: number): any {
  const oddsArray = range(start, end);
  for (const num in oddsArray) {
    if (num % 2 === 0) {
      oddsArray.push(num);
    }
  }
  return oddsArray;
}

function average(start: number, end: number): any {
  let averageArray: any = [];
  for (let i = start; i < end; i++) {
    averageArray.push(i);
    averageArray = +i;
  }
  return averageArray / length;
}

function range(start: number, end: number): any {
  const rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

// function getRangeReport(start: number, end: number): Object {}

console.log('range', range(1, 10));
console.log('odds', odds(1, 10));
console.log('evens', evens(1, 10));
