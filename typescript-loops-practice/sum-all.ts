/* exported sumAll */

function sumAll(numbers: number[]): any {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumAll([1, 2, 3]));
