# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?
  a feature that simplifies working with objects and arrays, that can extract multiple properties from objects/elements from arrays directly into variables

- What is the syntax for `Object` destructuring?
  allows you to unpack properties from objects into individual variables
  syntax: object can be written on one line, an identifier before the colon: being the property of the object & the identifier after: is the variable

const { firstName: first, lastName: last } = person;
console.log(first, last); // Outputs: John Doe

- What is the syntax for `Array` destructuring?
  assigns elements from an array to variables, useful when a function returns an array of values
  syntax: const [x,y,z]=numbers

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
  object literals use {} to define properties/values
  Destructuring is for unpacking existing data, object/array literals are to create new data structures

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
