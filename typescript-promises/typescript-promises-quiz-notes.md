# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  how JS manages asynchronous operations (network requests, file operations,etc)
  promises use the event loop to handle their resolution/rejection

- What are the three states a Promise can be in?
  Pending: initial
  Fulfilled: handlers will be called
  Rejected: catch handlers will be invoked

- How do you handle the fulfillment of a Promise?
  attach the .then() method to a Promise

- How do you handle the rejection of a Promise?
  attach the .catch() method to a Promise

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
