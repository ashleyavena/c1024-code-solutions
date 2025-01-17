# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?
  it examines request paths to see if the req path is a file stored in a specific location in the server's file system

- What does `express.static()` return?
  if the path matches, sends a file as HTTP response
  if path doesn't match, it passes on the request to the next middleware (by calling the next())

- What are several examples of static files?
  HTML, CSS, JS, images, video, audio, do not change
  but dynamic content needs to be stored in a database and changes each time it is requested

- What is a good way to serve application images using Express?
  Express static instead of React import

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
