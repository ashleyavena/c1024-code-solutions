/* exported oddOrEven */

function oddOrEven(numbers: number[]): any[] {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}

// oddOrEven([100, 121, 7]);
// // ['even', 'odd', 'odd']
