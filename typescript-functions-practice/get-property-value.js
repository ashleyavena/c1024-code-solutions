"use strict";
const Harry = {
    name: 'Harry Potter',
    occupation: 'wizard',
    birthPlace: 'England',
};
function getPropertyValue(object, key) {
    return object[key];
}
console.log(getPropertyValue(Harry, 'occupation'));
