# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?
  when the <li> are dynamic or come from external data, like an API or user-input

- Why is it important for React components to be data-driven?
  allows components to re-render efficiently based on State or Props changes, so the UI is up to date

- What `Array` method is commonly used to create a list of React components?
  map() method to create list of React components, it transforms each item in an array into a component
  and filter()

- Why do components in a list need to have unique keys?
  to help React identify which item changed/added/removed, to optimize rendering/performance

- What is the best value to use as a "key" prop when rendering lists?
  a unique, stable identifier, that doesn't change between renders, like an item's ID from a database

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
