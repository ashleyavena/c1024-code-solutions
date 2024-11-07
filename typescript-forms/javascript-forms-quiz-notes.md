# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?
  the 'focus' event - fires when an element receives focus

- What event is fired when a user's cursor leaves a form control?
  the 'blur' event -opposite of focus event

- What event is fired as a user changes the value of a form control?
  the 'input' event is fired when the value of a form control changes, like if a user types in a text input; though it's not fired for checkbox or radio

- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  the 'submit' event

- What does the `event.preventDefault()` method do?
  the even.preventDefault() method stops the default action associated with the event
  EX: in a form's submit event, it prevents the form from being sent to action URL server. Allows you to handle form submission using JavaScript instead

- What does submitting a form without `event.preventDefault()` do?
  if you submit without event.preventDefault() it will send the form's data to the specified action URL triggering a page reload

- What property of a form element object contains all of the form's controls.
  the '.elements' property contains a collection of all its controls

- What property of a form control object gets and sets its value?
  the '.value' property of a form control object gets and sets its value

- What is one risk of writing a lot of code without checking to see if it works so far?
  you'll probably accumulate errors, making it harder to identify the cause of problems, fixing multiple issues at once can be time-consuming & complex

- What is an advantage of having your console open when writing a JavaScript program?
  allows you to quickly catch errors and see real-time feedback, this makes debugging and testing code easier & more efficient

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
