# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  to create a dialog pop up box or modal window in HTML

- How do you show and hide a modal dialog?
  show() or showModal() and close()

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  child components are manipulated through Props or State, but this doesn't work for <dialog> because its methods (show, close) are not controlled by React's lifestyle

- How do you call the dialog element's functions in React?
  useRef()

- How can you render nested components or JSX elements in React?
  by including them within the parent component's return statement

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
