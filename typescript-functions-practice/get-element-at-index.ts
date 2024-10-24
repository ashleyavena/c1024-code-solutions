/* exported getElementAtIndex */

function getElementAtIndex(
  array: any[] = ['i', 'tell', 'you', 'too'],
  index: number
): any[] {
  return array[index];
}

console.log(
  'the element at 2nd index:',
  getElementAtIndex(['i', 'tell', 'you', 'too'], 2)
);
