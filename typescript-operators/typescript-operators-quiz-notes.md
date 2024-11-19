# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

the `&&` (logical AND) evaluates the 1st operand, checks for truthy values in variables and will return the falsy

the `||` (logical OR) sets default values/ takes alternate actions when variables have falsy values, evaluates the 1st operand if its truthy it returns it

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

describes how && and || skip evaluating the 2nd operand when not necessary

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

considers only null/undefined, provides a reliable way to set defaults without pitfalls of OR with falsy values
|| treats 0, ", and 'false' as falsy, but ?? does not

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

a compact if/else alternative, lets you write less verbose conditionals/operations
ternary is an expression (produces a value) and can be used inline

EX:
let result = condition ? valueIfTrue : valueIfFalse;
let status = age > 18 ? "adult" : "minor";

- What is the `?.` (optional chaining) operator? When would you use it?

allows access to properties on objects that might not exist
safely access deeply nested properties without causing errors

EX:
let city = user?.address?.city; // Returns undefined if any part is missing.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

used to clone/merge objects & arrays and expand the elements, useful in state management scenarios
EX:
let arr = [1, 2, ...otherArr];
let newObj = { ...oldObj, newProp: "value" };

- What data types can be spread into an array? Into an object?

iterables (arrays, strings, sets) can be spread into arrays
enumerable own properties can be spread into objects

- How does spread syntax differ from rest syntax?

spread syntax: expands values
let arr= [.. items];

rest syntax: collects multiple values into a single entity
function sum (..nums){
return nums.reduce((a,b)=> a+b);
}

rest is in function parameters/destructuring, whereas spread is used for expansion

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
