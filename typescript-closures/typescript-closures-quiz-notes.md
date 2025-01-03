# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  when the code is written (lexical or static scope), not when it runs
  where ever the variable is declared in the code defines its scope

- What allows JavaScript functions to "remember" variables from their surroundings?
  functions remember variables because of closures

- What values does a closure contain?
  variables declared in its outer function
  parameters passed to its outer function

- When is a closure created?
- a function is defined inside another function and references variables from its enclosed scope
  -the inner function is returned, passed as an argument, or assigned to a variable, keeping access to its og scope

- How can you tell if a function will be created with a closure?
  if
  -it references variables declared outside itself
  -is nested within another function
  -is returned or used outside its defining context

- In React, what is one important case where you need to know if a closure was created?
  closures are crucial when working with state setters in hooks
  ( If a closure "captures" an outdated state value, it can lead to stale state bugs)

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
