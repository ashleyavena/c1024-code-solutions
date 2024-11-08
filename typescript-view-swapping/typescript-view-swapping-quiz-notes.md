# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  a property of the event object in JS that refers to the element that triggered the event
  EX: clicking a button, 'event.target' will be the button element

- What is the effect of setting an element to `display: none`?
  this will remove it from the document flow, making it invisible and ensuring it doesn't take up any space on the page, often used to hide elements without deleting them from the DOM, then you can show them again later if you want

- What does the `element.matches()` method take as an argument and what does it return?
  it takes a CSS selector as an argument (like .button-class, #elementID) and returns a boolean value true if the element would be selected by the specified CSS selector, or false otherwise. This helps checking if an element has a specific class, attribute, etc

- How can you retrieve the value of an element's attribute?
  using the 'getAttribute()' method
  EX: 'element.getAttribute('data-id') would get the value of the 'data-id' attribute on the element, or access it directly with 'element.id'

- At what steps of the solution would it be helpful to log things to the console?
  -when an event is triggered (clicking a tab)
  -after retrieving and parsing values from att or data fields
  -before & after updating visibility of elements to confirm the correct elements are shown/hidden
  -checking conditions or looping through element

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  without event delegation, you need to add individual event listeners to each new tab element
  EX:
  const tab1 = document.querySelector('#tab1');
  const tab2 = document.querySelector('#tab2');
  const tab3 = document.querySelector('#tab3'); // new tab

         tab1.addEventListener('click', () => { /* Show view 1, hide others */ });
         tab2.addEventListener('click', () => { /* Show view 2, hide others */ });
         tab3.addEventListener('click', () => { /* Show view 3, hide others */ });
         ```
         Each click event would control which view is shown and hide the others. With more tabs and views, the code can become repetitive and harder to maintain.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  without a loop you'd need to manually show/hide each view element, likely with a series of 'if' or 'switch' statements, this approach would be more verbose and less scalable than using a loop or an object mapping tab IDs to views
  EX:
  if (tabId === 'tab1') {
  document.querySelector('#view1').style.display = 'block';
  document.querySelector('#view2').style.display = 'none';
  document.querySelector('#view3').style.display = 'none';
  } else if (tabId === 'tab2') {
  document.querySelector('#view1').style.display = 'none';
  document.querySelector('#view2').style.display = 'block';
  document.querySelector('#view3').style.display = 'none';
  } else if (tabId === 'tab3') {
  document.querySelector('#view1').style.display = 'none';
  document.querySelector('#view2').style.display = 'none';
  document.querySelector('#view3').style.display = 'block';
  }

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
