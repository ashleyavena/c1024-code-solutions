"use strict";
const mickey = {
    firstName: 'mickey',
    lastName: 'mouse',
};
function getFirstInitialOfPerson(person) {
    return person.firstName[0];
}
console.log(getFirstInitialOfPerson(mickey));
