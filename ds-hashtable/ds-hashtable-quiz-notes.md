# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

hash algorithm & indexing into a list is constant time

- Briefly describe the Hash Table data structure.
  a data structure that stores key/ value pairs using a hash function, look up an item with the key and the hash table returns the value
  the hash function returns an index and what bucket it will go into

- What are some examples of when you would use a Hash Table?
  Javascript objects are hash tables
  Search tables, caching, count frequencies
  fast data access, insertion, deletion

- How do you read a key's value in a Hash Table? What is its time complexity?
  compute the hash of the key to locate the index, then retrieve the value
  time complexity: O(1) average, O(n) worst case

- How do you add a key/value into a Hash Table? What is its time complexity?
  compute the hash of the key, locate the index, then store the key-value pair (if collisions occur use chaining or open address)
  time complexity: O(1) average, O(n) worst case

- How do you update a key's value in a Hash Table? What is its time complexity?
  locate the key (via its hash), then update the associated value
  time complexity: O(1) average, O(n) worst case

- How do you remove a key/value from a Hash Table? What is its time complexity?
  compute the hash of the key, locate the index, and remove the key-value pair
  time complexity: O(1) average, O(n) worst case

## Notes

hash table stores keys in a list (buckets)
to locate an item the key is "hashed" (a calculation is performed on it to reduce the number of the key)
Key Collision: when the hash value for 2 different keys is the same, the two items get stored at the same index
Can't be used to store data because the order of items in a hash table is unpredictable

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
