'use strict';
/* exported lastChars */
function lastChars(length, string) {
  if (string === '' || length <= 0) {
    return '';
  }
  if (length >= string.length) {
    return string;
  }
  return string.slice(-length);
}
