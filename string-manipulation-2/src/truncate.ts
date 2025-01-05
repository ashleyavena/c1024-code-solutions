/* exported truncate */
function truncate(length: number, string: string): string {
  if (length <= 0 || string === '') {
    return '...';
  }
  if (string.length <= length) {
    return string + '...';
  }
  return string.slice(0, length) + '...';
}
