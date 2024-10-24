"use strict";
/* exported getElementAtIndex */
function getElementAtIndex(array = ['i', 'tell', 'you', 'too'], index) {
    return array[index];
}
console.log('the element at 2nd index:', getElementAtIndex(['i', 'tell', 'you', 'too'], 2));
