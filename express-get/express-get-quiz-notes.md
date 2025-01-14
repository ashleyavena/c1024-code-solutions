# express-get-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the HTTP `GET` method?
  used to request data from a server at a specified resource (URL)
  for retrieving information without causing any side effects on the server

  the server is not required to honor that

EX:
Fetching a web page.
Retrieving data from an API.

Key characteristics:
Idempotent: Repeated requests produce the same result.
Safe: Does not alter the state of the server.
Parameters: Data can be sent via the URL as query parameters (e.g., ?key=value).

- What is the appropriate `Content-Type` header for HTTP messages that contain JSON in their bodies?

When an HTTP message contains JSON data in its body, the appropriate Content-Type header is:
Content-Type: application/json

This header indicates that the body of the request or response is in JSON format, ensuring that the server or client can parse the content correctly.

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
