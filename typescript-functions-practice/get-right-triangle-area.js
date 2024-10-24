"use strict";
/* exported getRightTriangleArea */
function getRightTriangleArea(base, height) {
    const area = (base * height) / 2;
    return area;
}
console.log('right triangle area:', getRightTriangleArea(3, 4));
