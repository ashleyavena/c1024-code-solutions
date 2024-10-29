/* exported initial */
function initial(array: any[]): unknown {
  const exceptLast = [];
  for (let i = 0; i < array.length - 1; i++) {
    exceptLast.push(array[i]);
  }
  return exceptLast;
}
