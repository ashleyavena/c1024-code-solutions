# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure. (great for sorting)
  data structure tree, with rules that allow for quick search and retrieval
  each node has at most 2 children, with orderable values
  all values to left of node are less than parent and to right greater than
  the binary search algorithm is
  recursive: the search function calls itself

- What are some examples of when you would use a Binary Search Tree?
  elements can be easily retrieved in sorted order, unlike Lists/Hash Tables
  -sorted data storage, search-heavy operations (dictionary), insertion/deletion

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  start at root and move down until found
  typical times
  if the BST is unbalanced, it can give linear times for all operations
  time complexity: O(h) -> O(n)

- How do you add an element into a Binary Search Tree? What is its time complexity?
  assign the new value to the index
  list[index]= new_value
  time complexity: O(n) in a balanced BST logmarithmic

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  Leaf Node (no children) remove it directly
  1 child: replace node with its child
  2 children: replace node in order of succession (smallest value in Right) or predecessor
  time complexity: O(h)-> O(log n) in a balanced BST

## Notes

With recursive algorithms, often public exported function interfaces should not include a parameter for the node since that can be difficult/inconvenient for the caller to provide
All student notes should be written here.

easiest to create a private (non-exported) function that does the recursion, and calling that from the exported function.

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
