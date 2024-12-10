# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  user action/browser-triggered event, like clicks, key presses, submissions, mouse movements

- What is an "event handler"? Which component declares the handler?
  a function that runs when an event occurs, the component that needs to respond to the event declares the event handler, a button component might declare a click event handler

- How do you pass an event handler to a React component?
  you pass it as a prop

- What is the naming convention for event handlers?
  handler functions: handleEventName handleClick, handleSubmit
  event props: onEventName, onClick, onChange, onSubmit

- What is an "event handler prop"? Which component declares the prop?
  a prop specifically for passing an event handler function to a child component, the parent component declares the event handler prop and passes it to the child

- What are some custom event handler props a component may wish to define?
  on: is the event you're describing
  handle: is the function name
  onLoginSuccess
  onFormSubmit
  onItemSelect
  onDataLoad

- What is the naming convention for custom event handler props?
  onEventName, onUserLogin, onCartUpdate, onProfileClick

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
