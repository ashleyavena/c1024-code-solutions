# typescript-popup-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React Portal?
  lets you render a child outside its parent DOM hierarchy while still preserving its relation on the React component tree
  meaning, the child is logically part of its parent component but can be rendered elsewhere in the DOM.

- Where does a Portal get rendered in the DOM?

its gets rendered into a DOM node outside the current component's DOM hierarchy, typically mounted in 'document.body'

EX:
import { createPortal } from 'react-dom';

function Popup({ isOpen, children }) {
if (!isOpen) return null;

return createPortal(

<div className="popup">{children}</div>,
document.body
);
}

- When might you want to use a Portal?

1. Overlay Content:
   -Create modals, tooltips, dropdowns, or popups that need to appear on top of the rest of the app.
2. Escape Parent Styling:
   -Avoid being affected by CSS overflow or positioning issues in parent components.
3. Global Elements:
   -Add notifications, alerts, or floating menus that need to be outside the normal DOM hierarchy for layout purposes.

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
