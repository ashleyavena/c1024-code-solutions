/* exported getAverageOfThreeNumbers */

function getAverageOfThreeNumbers(x: number, y: number, z: number): number {
  const average = (x + y + z) / 3;
  return average;
}

console.log('average of three numbers', getAverageOfThreeNumbers(5, 6, 7));
