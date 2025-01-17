# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  post, get, put, delete. No, the server is not required.

- What is Express middleware?
  Middleware is a function that runs during the request-response cycle, it acts as a bridge between the incoming request and the final response.
  express connects routes to functions using middleware

- What is Express middleware useful for?
  handling & routing http requests with different http methods

- How do you mount a middleware with an Express application?
  with any of the app.METHOD, to match it to the specified HTTP method & path

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req & res objects

- How do you specify and retrieve route parameters?
  specified in the route path by adding a : before the identifier name & accessed through the `req.params` object.
  EX:
  Route path: /users/:userId/books/:bookId
  Request URL: http://localhost:8080/users/34/books/8989
  req.params: { "userId": "34", "bookId": "8989" }
  const { userId, bookId } = req.params;

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
