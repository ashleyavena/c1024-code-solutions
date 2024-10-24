/* exported getAreaOfCircle */

function getAreaOfCircle(radius: number): number {
  const circleArea: number = Math.PI * (radius * radius);
  return circleArea;
}

console.log('area of circle:', getAreaOfCircle(3));
