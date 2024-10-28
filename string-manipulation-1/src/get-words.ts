/* exported getWords */
function getWords(string: string): any[] {
  const newArray: string[] = [];
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      newArray.push(words[i]);
    }
  }
  return newArray;
}

// getWords('LearningFuze');
// // -> ["LearningFuze"]
// getWords('Web Development');
// // -> ["Web", "Development"]
// getWords('Cascading Style Sheets');
// // -> ["Cascading", "Style", "Sheets"]
// getWords('European Computer Manufacturers Association');
// // -> ["European", "Computer", "Manufacturers", "Association"]
// getWords('');
// // -> []
