# ds-list-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the List data structure.
  a contiguous block of memory, divided into equal sized elements, not a javascript array

- What are some examples of when you would use a List?
  data storage

- How do you read an element of a List given its index? What is its time complexity?
  located in memory by multiplying the index by the element size and adding the memory location of the first element in the list.
  its time complexity is constant time

- How do you add an element into a List at a given index? What is its time complexity?
  you shift all the elements after the index you want to insert it at
  its time complexity is linear

- How do you update an element in a List at a given index? What is its time complexity?
  update are constant time complexity

- How do you remove an element from a List at a given index? What is its time complexity?
  removing is linear because we have to touch the other elements and shift them down

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
