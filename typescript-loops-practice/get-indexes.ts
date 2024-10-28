/* exported getIndexes */

function getIndexes(array: any[]): number[] {
  let index = 0;
  const numberedIndex = [];
  for (index = 0; index < array.length; index++) {
    numberedIndex.push(index);
  }
  return numberedIndex;
}
console.log(getIndexes([1, 2, 3]));
