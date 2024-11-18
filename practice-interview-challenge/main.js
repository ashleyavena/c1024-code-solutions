"use strict";
// const object: Object ={
// total:
// odds:
// evens:,
// range:,
// average:
// }
function total(start, end) {
    const totalArray = range(start, end);
    let sum = 0;
    for (let i = start; i < end; i++) {
        totalArray.push(i);
        sum = +totalArray[i];
    }
    return sum;
}
console.log(total(1, 5));
function odds(start, end) {
    const oddsArray = range(start, end);
    for (const num in oddsArray) {
        if (num % 2 !== 0) {
            oddsArray.push(num);
        }
    }
    return oddsArray;
}
function evens(start, end) {
    const oddsArray = range(start, end);
    for (const num in oddsArray) {
        if (num % 2 === 0) {
            oddsArray.push(num);
        }
    }
    return oddsArray;
}
function average(start, end) {
    let averageArray = [];
    for (let i = start; i < end; i++) {
        averageArray.push(i);
        averageArray = +i;
    }
    return averageArray / length;
}
function range(start, end) {
    const rangeArray = [];
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}
// function getRangeReport(start: number, end: number): Object {}
console.log('range', range(1, 10));
console.log('odds', odds(1, 10));
console.log('evens', evens(1, 10));
