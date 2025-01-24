import CryptoJS from 'crypto-js';
import { User } from '../components/UserContext';

const authKey = 'um.auth';
const secretKey = 'mySecret';

if (!secretKey) {
  throw new Error('TOKEN_SECRET is not defined in env variables');
}

type Auth = {
  user: User;
  token: string;
};

export function saveAuth(user: User, token: string): void {
  const auth: Auth = { user, token };
  const encryptedAuth = CryptoJS.AES.encrypt(
    // create auth, stringify, then encrypt
    JSON.stringify(auth),
    secretKey
  ).toString();

  localStorage.setItem(authKey, encryptedAuth);
}

export function removeAuth(): void {
  localStorage.removeItem(authKey);
}

function readAuth(): Auth | undefined {
  const encryptedAuth = localStorage.getItem(authKey); // when u take it out u decrypt and then parse
  if (!encryptedAuth) return undefined;
  const bytes = CryptoJS.AES.decrypt(encryptedAuth, secretKey);
  const decryptedAuth = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedAuth;
}

export function readUser(): User | undefined {
  return readAuth()?.user;
}

export function readToken(): string | undefined {
  return readAuth()?.token;
}

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export async function readTodos(): Promise<Todo[]> {
  const req = {
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return (await res.json()) as Todo[];
}

export async function insertTodo(todo: UnsavedTodo): Promise<Todo> {
  const req = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${readToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return (await res.json()) as Todo;
}

export async function updateTodo(todo: Todo): Promise<Todo> {
  const req = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${readToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return (await res.json()) as Todo;
}

export async function removeTodo(todoId: number): Promise<void> {
  const req = {
    method: 'DELETE',
    Authorization: `Bearer ${readToken()}`,
  };
  const res = await fetch(`/api/todos/${todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
}
