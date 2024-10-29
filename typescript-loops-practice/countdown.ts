/* exported countdown */

function countdown(num: number): any {
  let index = num;
  const fluff = [];
  while (index >= 0) {
    fluff.push(index);
    index--;
  }
  return fluff;
}

console.log(countdown(10));
