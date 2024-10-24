/* exported getLastElement */
function getLastElement(array: any[] = ['i', 'tell', 'you', 'what']): any {
  return array[array.length - 1];
}

console.log('the last element:', getLastElement());
