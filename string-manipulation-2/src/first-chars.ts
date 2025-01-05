/* exported firstChars */

function firstChars(length: number, string: string): string {
  if (string === '' || length <= 0) {
    return '';
  }
  return string.slice(0, length);
}
