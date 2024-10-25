/* exported getDescriptionOfPerson */
interface Persona {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(persona: Persona): string {
  return `${persona.name} is a ${persona.occupation} from ${persona.birthPlace}.`;
}

const ashley: Persona = {
  name: 'ashley avena',
  occupation: 'student',
  birthPlace: 'california',
};

console.log(getDescriptionOfPerson(ashley));
