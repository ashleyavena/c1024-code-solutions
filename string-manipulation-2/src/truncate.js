'use strict';
/* exported truncate */
function truncate(length, string) {
  if (length <= 0 || string === '') {
    return '...';
  }
  if (string.length <= length) {
    return string;
  }
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString + '...';
}
