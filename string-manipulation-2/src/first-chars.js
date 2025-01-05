'use strict';
/* exported firstChars */
function firstChars(length, string) {
  if (string === '' || length <= 0) {
    return '';
  }
  return string.slice(0, length);
}
