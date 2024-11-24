# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  a client is a device/app or user agent (like a web browser) that initiates communication with a server to request resources/data/services. Clients are the consumers in a client-server model.

- What is a server?
  a system that listens for client requests, processes them, and provides the requested resources, data, or services. Examples include web servers (e.g., Apache, Nginx) and database servers.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  The browser typically issues an HTTP GET

- What three things are on the start-line of an HTTP **request** message?
  HTTP Method (e.g., GET, POST, PUT)
  Request Target (e.g., the path and query string: /about?name=Ashley)
  HTTP Version (e.g., HTTP/1.1)

- What three things are on the start-line of an HTTP **response** message?
  HTTP Version (e.g., HTTP/1.1)
  Status Code (e.g., 200, 404, 500)
  Reason Phrase (e.g., OK, Not Found, Internal Server Error)

- What are HTTP headers?
  HTTP headers are key-value pairs included in HTTP request and response messages to convey metadata.
  Headers provide information such as the format of the data, client capabilities, server settings, and security options.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  You can learn more about HTTP headers on the official MDN Web Docs (HTTP Headers) or in the IETF RFC documents for HTTP specifications.

- Is a body required for a valid HTTP request or response message?
  No, a body is not required.
  For requests, methods like GET and DELETE typically do not include a body, while POST and PUT do.
  For responses, the body may be absent in cases like:
  Responses with status codes such as 204 No Content or 304 Not Modified.
  A HEAD request where the response includes headers but no body.

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
