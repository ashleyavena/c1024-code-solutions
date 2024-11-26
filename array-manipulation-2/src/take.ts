/* exported take */

function take(array: any, count: number): unknown {
  const newArray = [];
  for (let i = 0; i < count && array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
