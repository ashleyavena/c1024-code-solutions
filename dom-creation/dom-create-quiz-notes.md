# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no, it creates a new element but does not automatically insert it into the page, it just creates an element in memory. you have to add the new element to the DOM using methods like 'appendChild() or insertBefore()'

- How do you add an element as a child to another element?
  with 'appendChild()'
  const parentElement = document.getElementById('parent');
  const newElement = document.createElement('div');
  parentElement.appendChild(newElement);

- What do you pass as the arguments to the `element.setAttribute()` method?
  this takes two arguments: the name of the attribute you want to set, and the value you want to assign
  For example: element.setAttribute('class', 'my-class');

- What steps do you need to take in order to insert a new element into the page?
  use 'document.createElement()' to create the element
  or other methods like 'setAttribute()' 'classList.add()' or 'textContent'
  append the element to a parent node with appendChild() etc.

- What is the `textContent` property of an element object for?
  the text content property sets/retrieves the text content from inside an element

- Name two ways to set the `class` attribute of a DOM element.
  setAttribute() -> element.setAttribute('class','my-class')
  or
  use 'className' or 'classList' properties -> element.className= 'my-class'
  or
  element.classList.add('my-class')

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  reusability, abstraction, readability, organization, easily updatable, testability

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
