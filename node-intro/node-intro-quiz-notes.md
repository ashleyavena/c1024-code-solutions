# node-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the 3 components of a fullstack Web architecture?

1. Frontend:

- client side, UI
- built with HTML, CSS, and JavaScript frameworks/libraries (React, Angular, Vue)

2. Backend:

- server-side logic & processing
- manages data flow, logic, APIs
- built with frameworks like Node.js, Express, Ruby

3. Database:

- stores & manages data
- can be relational (PostgreSQL, MySQL) or non-relational (MongoDB)
- interacts with the backend to store & retrieve data

- What is Node.js and why is it useful?
  an open source, JavaScript runtime environment that lets developers execute JavaScript code outside the web browser

  useful in server-side bc it enables JS to be used for backend development, unifying the language across the stack
  event-driven, non blocking I/O: async nature makes it scalable & ideal to handle multiple requests

- What are environment variables and how do you access them in Node.js?
  variables stored in the system or app environment used to configure settings (API keys, database credentials, port numbers)
  Accessed using 'process.env'

EX:
console.log(process.env.API_KEY); // Accesses the value of the API_KEY environment variable

- What is a REPL?
  read-evaluate-print loop: interactive programming environment lets developers execute code & see results in real time
  used for testing small snippets of code or debugging

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
