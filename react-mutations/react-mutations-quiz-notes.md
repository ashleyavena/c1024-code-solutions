# react-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When does React re-render a component?
  the only way to force a React component to re-render is to modify one of its props, or to modify its state with the state setter function.

if the component modifies the object or array directly the component will not re-render, because the state setter was not called.
To guarantee that the component re-renders, the state setter function must be called with a new copy of the array or object. This is often referred to as immutably modifying the array or object.

- What are some ways to create a new, modified copy of an object?
  an immutable manner by making a copy of the object and then modifying the copy's properties
  Object.assign() this method takes 2 or more arguments, copies all the fields in the second (or more) arguments into the first argument.

- What is a good way to immutably add a value to an array?
  with Array.concat() this makes a copy of the Array and then pushing the item onto the copy.

- What is a good way to immutably update a value in an array?
  Array.map, this copies each element in the Array into a new Array, and then replacing the updated item.

- What is a good way to immutably remove a value from an array?
  Array.filter, if each item has a unique identifier, this method copies each element in the Array into a new Array, except the one being removed.

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
