# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?

It defines what action the client wants the server to perform (e.g., GET to get data, POST to send data, PUT to update data, DELETE to remove data).

- What is the significance of an HTTP response's status?
  It tells the client if the server successfully processed the request or if there was an error.

200 OK: Success
404 Not Found: Resource not found
500 Internal Server Error: Server error

- What does the express.json() middleware do and when would you need it?
  It parses JSON data in incoming requests and makes it available in req.body. You need it when your app expects data in JSON format (e.g., when receiving data from a front-end app).

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
