/* exported chunk */

function chunk(array: any, size: number): unknown {
  const newArray = [];
  let subArray = [];
  for (let i = 0; i < array.length; i++) {
    subArray.push(array[i]);
    if (subArray.length === size || i === array.length - 1) {
      newArray.push(subArray);
      subArray = [];
    }
  }
  return newArray;
}
