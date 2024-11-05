# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  helps us visualize the code on the browser, allows for debugging, monitoring and checking

- What is the purpose of events and event handling?
  events are interactions by the user or changes to system's state (form submission)
  event handling responds to these events by running specific code, making web app interactive & responsive

- Are all possible parameters required to use a JavaScript method or function?
  no, some will work if you omit parameters, but functionality could be loss/ might need default values

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener

- What is a callback function?
  a function that is passed as another function as an argument; in order to invoke it

- What object is passed into an event listener callback when the event fires?
  the event object, containing details about the event (type, target, into)

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target is a property of the Event object, it refers to the element that triggered the event
  if youre unsure you can console.log(event.target)

- What is the difference between these two snippets of code?

the first passes handleClick function as a callback correctly, the second immediately invokes the handleClick and passes its return value to addEventListener

```js
element.addEventListener('click', handleClick);
```

```js
element.addEventListener('click', handleClick());
```

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
