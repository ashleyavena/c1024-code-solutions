/* exported getRightTriangleArea */
function getRightTriangleArea(base: number, height: number): number {
  const area: number = (base * height) / 2;
  return area;
}

console.log('right triangle area:', getRightTriangleArea(3, 4));
