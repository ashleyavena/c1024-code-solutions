'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const todosJSON = localStorage.getItem('todos-storage');
  // console.log(todosJSON);
  // console.log(JSON.parse(todosJSON));
  if (todosJSON) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
}
