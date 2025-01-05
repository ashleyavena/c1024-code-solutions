'use strict';
/* exported truncate */
function truncate(length, string) {
  if (length <= 0 || string === '') {
    return '...';
  }
  if (string.length <= length) {
    return string + '...';
  }
  return string.slice(0, length) + '...';
}
