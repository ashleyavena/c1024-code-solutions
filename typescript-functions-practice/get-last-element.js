"use strict";
/* exported getLastElement */
function getLastElement(array = ['i', 'tell', 'you', 'what']) {
    return array[array.length - 1];
}
console.log('the last element:', getLastElement());
