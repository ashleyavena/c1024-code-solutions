# http-messages-recap-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  a computer, application, or device that makes requests to a server to retrieve or send data
  browsers: Chrome, Firefox

- What is a server?
  a computer or program that provides resources, data, services to clients upon their requests
  web server hosts the website's files and sends them to your browser(client)

- Which HTTP method does a browser issue to a web server when you visit a URL?
  when you visit a URL, browser issues an HTTP GET request
  this message retrieves data (web page/file) without altering the server state

- What is on the first line of an HTTP **request** message?
  the request line,
  includes:

1. HTTP method (GET, POST)
2. Target URL or path (/home)
3. HTTP version (HTTP/1.1)

GET /index.html HTTP/1.1

- What is on the first line of an HTTP **response** message?
  the status line
  that includes:

1. HTTP version (HTTP/1.1)
2. Status code (200, 404)
3. Reason phrase (OK, Not Found)

- What are HTTP headers?
  key/value pairs included in the HTTP request and response messages
  provide additional info about the message (caching policies, content, authentication, etc)

EX request header
User-Agent: Mozilla/5.0

EX response header
Content-Type: text/html; charset=UTF-8

- Is a body required for a valid HTTP message?

no, body is not required
HTTP GET, HEAD typically don't have bodies
HTTP POST, PUT typically do have bodies
HTTP body is common for responses that deliver data like (200 OK)

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
