/* exported lastChars */
function lastChars(length: number, string: string): string {
  if (string === '' || length <= 0) {
    return '';
  }
  if (length >= string.length) {
    return string;
  }
  return string.slice(-length);
}
