"use strict";
const person = {
    firstName: 'ashley',
    lastName: 'avena',
};
function getLastNameOfPerson(person) {
    const getLastNameResult = person.lastName;
    return getLastNameResult;
}
console.log("the person's last name is:", getLastNameOfPerson(person));
