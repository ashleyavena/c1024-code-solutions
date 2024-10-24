"use strict";
/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
    const circleArea = Math.PI * (radius * radius);
    return circleArea;
}
console.log('area of circle:', getAreaOfCircle(3));
