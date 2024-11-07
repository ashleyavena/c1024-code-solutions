# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  a property of an event object that refers to the element that triggered the event
  EX: if you click on a button, event.target will reference that button element

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  this is due to DOM delegation, and bubbling.
  In DOM, events bubble up from the target element (where the event occurred) to its ancestor, this saves resources since you can attach a single event to a common ancestor

- What DOM element property tells you what type of element it is?
  the nodeName or tagName property
  EX: element.nodeName on a <div> would return "DIV"

- What does the `element.closest()` method take as its argument and what does it return?
  takes a CSS selector string as its argument, and returns the closest ancestor element

- How can you remove an element from the DOM?
  use element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  use event delegation, attach one event listener to a common ancestor that exists before the new elements are added

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
