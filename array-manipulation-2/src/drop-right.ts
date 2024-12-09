/* exported dropRight */

function dropRight(array: any, count: number): unknown {
  const newArray = [];
  for (let i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
