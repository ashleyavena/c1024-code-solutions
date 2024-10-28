/* exported tail */

function tail(array: any[]): unknown {
  const afterFirstIndex = [];
  for (let i = 1; i < array.length; i++) {
    afterFirstIndex.push(array[i]);
  }
  return afterFirstIndex;
}
