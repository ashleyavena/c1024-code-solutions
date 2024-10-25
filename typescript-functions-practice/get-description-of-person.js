"use strict";
function getDescriptionOfPerson(persona) {
    return `${persona.name} is a ${persona.occupation} from ${persona.birthPlace}.`;
}
const ashley = {
    name: 'ashley avena',
    occupation: 'student',
    birthPlace: 'california',
};
console.log(getDescriptionOfPerson(ashley));
