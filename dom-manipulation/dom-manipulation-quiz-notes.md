# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  sets the value of an element's class attribute as a single string

- How do you update the CSS class attribute of an element using JavaScript?
  by assigning a new value to the className property

- What is the `textContent` property of element objects?
  represents the text content of an element and all its children, it returns all text wihtin an element as a single string

- How do you update the text within an element using JavaScript?
  by assigning a new string to its textContent property

- Is the `event` parameter of an event listener callback always useful?
  no, its not always needed but often useful because it provides information about the event (event.target)

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  probably more complicated, using a varibale makes it easy to increment and check the number of clikcks, otherwise might have to rely on storing data in the DOM which is complex or conditionals

- Why is storing information about a program in variables better than only storing it in the DOM?
  improves readability, efficiency, easier to access, and manipulate than extracting data from the DOM

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
