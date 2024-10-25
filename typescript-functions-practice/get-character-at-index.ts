/* exported getCharacterAtIndex */
function getCharacterAtIndex(
  string: string = 'he who shall not be named',
  index: number
): any {
  return string[index];
}

console.log(getCharacterAtIndex('he who shall not be named', 17));
