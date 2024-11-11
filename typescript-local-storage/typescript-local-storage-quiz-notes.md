# typescript-local-storage-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you store data in `localStorage`?
  using the 'setItem' method, which takes 2 parameters, a key and a value

  EX: localStorage.setItem("username", "Ashley");

- How do you retrieve data from `localStorage`?
  using 'getItem' method with a the key you stored the data under

  EX: const username = localStorage.getItem("username");
  console.log(username); // Output: "Ashley"

- What data type can `localStorage` save in the browser?
  it can only store string data, if you need to store more complex data types like objects/arrays you need to convert them to strings using JSON.stringify()

  \*This makes localStorage ideal for saving user preferences, settings, and state between page visits without needing to re-fetch or recreate data every time a page is loaded.

  EX:
  const user = { name: "Ashley", age: 30 };
  localStorage.setItem("user", JSON.stringify(user));

  To retrieve and parse it back to an object:
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.name); // Output: "Ashley"

- When is the safest time to store user data?
  after user consent; for sensitive data, always ask user consent
  after verifying data; after form submission/input validation
  on specific events; after users login, settings update, form submissions

  local storage is generally persistent and not cleared when the page reloads or the browser closes, it's great for long-term storage yet unsuitable for highly sensitive data

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
