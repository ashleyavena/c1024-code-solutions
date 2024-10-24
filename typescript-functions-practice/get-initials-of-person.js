"use strict";
const minnie = {
    firstName: 'minnie',
    lastName: 'mouse',
};
function getInitialsOfPerson(person) {
    return person.firstName[0] + person.lastName[0];
}
console.log(getInitialsOfPerson(minnie));
