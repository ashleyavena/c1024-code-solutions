# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  async: declares a function that always returns a Promise
  await: indicates that JS Runtime should "wait" or "pause" until the asynchronous (Promise) function completes

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  cleaner, more synchronous appearance, handles sequential code naturally, better for modern environments

- When do you use `async`?
  used to declare a function that'll handle asynchronous operations, ensures the function returns a Promise

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use: to pause the execution of an async function until a Promise resolves
  do not use: when calling a synchronous function, when you don't need to wait for the result immediately (fire-and-forget tasks)

  if you 'await' a synch function it'll still work but it adds unnecessary overhead since there's no Promise to resolve

- How do you handle errors with `await`?
  wrap await calls in a try block and handle errors in a catch block
  EX:
  try {
  const response = await fetch('https://api.example.com');
  if (!response.ok) {
  throw new Error('Network response was not ok');
  }
  return await response.json();
  } catch (error) {
  console.error('Fetch error:', error);
  }

- What do `try`, `catch` and `throw` do? When do you use them?
  try: defines a block of code to attempt execution
  catch: defines a block of code to execute if an error occurs in the try block
  throw: manually creates and throws an error to be handled by catch

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the function will proceed without waiting for the Promise to resolve, often leading to logic errors or undefined values

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await because readability , reduced nesting, error handling, modern standards

  However, Promise.then is still useful for chaining multiple independent Promises, and callbacks can be necessary when working with legacy APIs.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
