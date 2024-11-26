/* exported drop */

function drop(array: any, count: number): unknown {
  const newArray = [];
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
