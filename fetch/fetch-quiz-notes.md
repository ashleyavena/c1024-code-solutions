# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  returns a Promise that resolves to the Response object representing the outcome of the request

- What is the default request method used by `fetch()`?
  the default request method for fetch is GET
  if no method is specified, fetch will perform a GET request

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  you have to pass an options object as the second argument to fetch(), setting the method property to 'GET', 'POST', 'PUT', 'DELETE' etc.

- How does `fetch` report errors?
  fetch considers a promise resolved even if the server responds with an error status code, it only rejects the promise on network failures or anything that prevented the request from completing

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
