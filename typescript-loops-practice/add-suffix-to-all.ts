/* exported addSuffixToAll */

function addSuffixToAll(words: string[], suffix: string): unknown {
  let index = 0;
  const suffixResult: string[] = [];
  for (index = 0; index < words.length; index++) {
    suffixResult.push(words[index] + suffix);
  }
  return suffixResult;
}
addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity');
