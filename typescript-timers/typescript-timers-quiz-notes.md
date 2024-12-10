# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?
  a function that's passed into another function as an argument to initiate that function

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  using the setTimeout() function which executes the callback function after a specified delay

- How can you set up a function to be called repeatedly without using a loop?
  using the setInterval() function to call a function repeatedly at specified intervals

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?

if you omit the delay parameter for setTimeOut() the default delay is 0 milliseconds, the function executes asap after the current execution stack gets cleared

for setInterval() if you omit it will also be 0 ms delay, this'll cause a run continuously without a meaningful interval

- What do `setTimeout()` and `setInterval()` return?
  they both return a numeric identifier (ID) that represents the timer, this ID can be used to cancel the timer with clearTimeout() or clearInterval()

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
