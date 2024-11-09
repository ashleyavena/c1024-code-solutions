/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON: string = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): any {
  const todosJSON = localStorage.getItem('todos-storage');
  // console.log(todosJSON);
  // console.log(JSON.parse(todosJSON));
  if (todosJSON) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
}
