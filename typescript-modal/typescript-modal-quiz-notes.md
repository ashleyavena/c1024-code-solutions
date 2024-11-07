# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  used to create dialog box or pop-up window that can contain info, prompts, or forms, without the need for JS libraries/frameworks

- How do you display a modal dialog?
use the <dialog> element with the JS method '.showModal()'
  <dialog id="myDialog">This is a modal dialog</dialog>
   <button onclick="document.getElementById('myDialog').showModal()">Open Modal</button>

- How do you hide a modal dialog?
  use the '.close()' method this will close the dialog and hides it from the user
  or
  you can use a close button within the dialog, often implemented like this:

- What is the difference between the `showModal` & `show` methods?
  showModal opens the dialog as a modal, this means it will prevent interaction with other parts of the page until the dialog is closed
  show opens the dialog as a non-modal, this means users can still interact with the rest of the page while the dialog is open, this is more like an "overlay" than a true modal

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
