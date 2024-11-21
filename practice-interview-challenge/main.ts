interface ObjectFace {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}
function getRangeReport(start: number, end: number): ObjectFace {
  let total = 0;
  const odds: number[] = [];
  const evens: number[] = [];
  const range: number[] = [];
  for (let index = start; index <= end; index++) {
    range.push(index);
    total += index;
    if (index % 2 !== 0) {
      odds.push(index);
    } else {
      evens.push(index);
    }
  }
  const average: number = total / range.length;
  return {
    total,
    odds,
    evens,
    range,
    average,
  };
}
console.log(getRangeReport(1, 10));
