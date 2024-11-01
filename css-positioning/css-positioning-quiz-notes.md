# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  'static' meaning the element will follow normal doc flow and wont be positioned with offsets

- How does setting `position: relative` on an element affect document flow?
  does not remove the element from normal doc flow

- How does setting `position: relative` on an element affect where it appears on the page?
  with this you can use offsets, element can shift without affecting the other elements positions

- How does setting `position: absolute` on an element affect document flow?
  with this the element is removed from the doc flow, other elements pretend it doesn't exist

- How does setting `position: absolute` on an element affect where it appears on the page?
  its positioned relative to its nearest positioned ancestor, if no ancestor it positions relative to the body element

- How do you constrain an absolutely positioned element to a containing block?
  set position relative on the containing block

- What are the four box offset properties?
  offsets are top, right, bottom, left

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
