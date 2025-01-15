# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  fetch() or libraries like Axios

EX:
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

- What two things need to be done to properly handle HTTP request errors? Why?

1. check HTTP response status (not all http errors 404, 500 are considered exceptions by fetch)
2. Handle network errors (use .catch() block)

EX:
fetch('https://api.example.com/data')
.then(response => {
if (!response.ok) {
throw new Error(`HTTP error! Status: ${response.status}`);
}
return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Network error:', error));

- How can `useEffect` be used to load data for a component?
  performs side effects like fetching data when a component renders

EX:
function MyComponent() {
const [data, setData] = useState([]);

useEffect(() => {
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => setData(data))
.catch(error => console.error('Error fetching data:', error));
}, []); // Dependency array ensures the effect runs only when dependencies change.

return <div>{JSON.stringify(data)}</div>;
}

- How do you use `useEffect` to load component data just once when the component mounts?
  pass an empty dependency array [] to useEffect (ensures the effect runs only after initial render)

- How do you use `useEffect` to load component data every time the data key changes?
  include dataKey in the dependency array (effect will re-run whenever dataKey changes)

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

1. state management libraries: to manage & cache global state \* backend data
2. GraphQL & Apollo Client
3. Server-side rendering SSR: frameworks like Next.js to prefetch data

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
