/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  if (
    firstIndex < 0 ||
    secondIndex < 0 ||
    firstIndex >= string.length ||
    secondIndex >= string.length
  ) {
    return string;
  }
  const charArray = string.split('');
  const temp = charArray[firstIndex];
  charArray[firstIndex] = charArray[secondIndex];
  charArray[secondIndex] = temp;
  return charArray.join('');
}
