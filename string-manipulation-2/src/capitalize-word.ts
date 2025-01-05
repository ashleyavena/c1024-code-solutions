/* exported capitalizeWord */
function capitalizeWord(word: string): any {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
