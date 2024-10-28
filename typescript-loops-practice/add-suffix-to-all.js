'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let index = 0;
  const suffixResult = [];
  for (index = 0; index < words.length; index++) {
    suffixResult.push(words[index] + suffix);
  }
  return suffixResult;
}
addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity');
