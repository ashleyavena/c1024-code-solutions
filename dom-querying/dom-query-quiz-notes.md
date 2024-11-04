# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to help us see how things appear on the interface, debug, track code ono the monitor

- What is a "model"?
  can represent the structure of a webpage (DOM) or data relationships

- Which "document" is being referred to in the phrase Document Object Model?
  the document that we load in the web browser, it's the root of the tree, other elements are branches and leaves

- What is the word "object" referring to in the phrase Document Object Model?
  JavaScript objects that represent HTML elements in the DOM

- What is a DOM Tree?
  hierarchal representation of the HTML document, this refers to each element as a node in the tree, referencing the tree like structure of html

- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector) and getElementById(id)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector) and getElementsByClassName(className)

- Why might you want to assign the return value of a DOM query to a variable?
  makes it easier to reuse the elements without querying the DOM again

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir() this will display an interactive list of an elements' properties

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  ensures the HTML content is fully loaded before the script runs

- What does `document.querySelector()` take as its argument and what does it return?
  takes a CSS selector (class, id, tag) as argument and returns the first matching element in the DOM or null

- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes a CSS selector (class, id, tag) as argument and returns a NodeList of all matching elements, a static collection

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
