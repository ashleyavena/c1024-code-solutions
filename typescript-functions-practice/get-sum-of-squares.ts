/* exported getSumOfSquares */

function getSumOfSquares(x: number, y: number): number {
  const sumSquared: number = x * x + y * y;
  return sumSquared;
}

console.log('the sum of squared numbers:', getSumOfSquares(3, 8));
