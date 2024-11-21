# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    executes a function once for each array element, always returns undefined and isn't chainable. It does not mutate the array on which it is called, there is no way to stop or break forEach()

  - What should the callback function do?
    take three arguments (currentValue, index, array)

  - What is `Array.forEach` useful for?
    to execute side effects at the end of a chain

- `Array.map`:

  - What does `Array.map` do?
    creates a new array populated with the results of calling a provided function on every element in the calling array

  - What should the callback function return?
    a new array with each element being the result of the callback function

  - What is `Array.map` useful for?
    when you're building a new array, it's chainable (you can use map() on the result of another map())

- `Array.find`:

  - What does `Array.find` do?
    method returns the value of the first element in the provided array that satisfies the provided testing function

  - What should the callback function return?
    until the function returns true, indicating that the satisfying element was found

  - What is `Array.find` useful for?
    executes the callback function for each index from 0 to length-1, not necessarily all indices of the array. It will not process elements added to the array after the call to find() begins.

- `Array.filter`:

  - What does `Array.filter` do?
    creates a new array with all elements that pass the test implemented by the provided function.

  - What should the callback function return?
    Function returns true to keep the element, false otherwise

  - What is `Array.filter` useful for?
    constructs a new array of all the values for which callback returns a value that coerces to true. filter() does not mutate the array on which it is called

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
