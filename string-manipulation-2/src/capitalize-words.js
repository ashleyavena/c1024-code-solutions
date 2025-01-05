'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' '); // Split the string into an array of words
  let result = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // Capitalize the first letter and make the rest lowercase
    const capitalizedWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // Add the capitalized word to the result
    result += capitalizedWord;
    // Add a space if it's not the last word
    if (i < words.length - 1) {
      result += ' ';
    }
  }
  return result;
}
