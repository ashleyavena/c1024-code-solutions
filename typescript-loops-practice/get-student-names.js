'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const keys = [];
  for (let index = 0; index < students.length; index++) {
    keys.push(students[index].name);
  }
  return keys;
}
// function getStudentNames(students: Students[]): string[] {
//   const index = 0;
//   const keys: string[] = [];
//   for (const index in students) {
//     keys.push(students[index].name);
//   }
//   return keys;
// }
// // getStudentNames({ name: 'shrek' });
// function getStudentNames(students: { name: string }[]): string[] {
//   const index = 0;
//   const keys: string[] = [];
//   for (const index in students) {
//     keys.push(students[index].name);
//   }
//   return keys;
// }
