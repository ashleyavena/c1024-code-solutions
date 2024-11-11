# typescript-and-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?
  JavaScript object notation, a lightweight data-interchange format that is easy for humans to read/write & easy for machines to parse/generate, often used for transmitting data between a server & web app as text
  A JSON object is a collection of key-value pairs

- What are serialization and deserialization?
  SERIALIZATION: the process of converting an object or data structure into a format that can be easily transmitted/stored, usually converts an object to a string (JSON) so it can be sent over the network or written to a file

  DESERIALIZATION: the reverse process, where the string (JSON) is converted back into a data structure/object that can be used in the program

- Why are serialization and deserialization useful?
  interoperability: allows different systems/applications, written in diff programming languages to communicate withh each other using common format(JSON)
  Data Storage: serialization lets you save an object to a file/database/cloud, and later restore it w deserialization
  Efficiency: eases the sending of data over networks(APIs) as the data can be sent as a string(JSON)

- How do you serialize a data structure into a JSON string using TypeScript?
  using 'JSON.stringify()'
  EX:
  // const person = {
  // name: "John",
  // age: 30,
  // isStudent: false
  // };
  // const jsonString = JSON.stringify(person);
  // console.log(jsonString); // Output: '{"name":"John","age":30,"isStudent":false}'
  // ```

- How do you deserialize a JSON string into a data structure using TypeScript?
  using 'JSON.parse()'
  this method returns a plain JavaScript object.
  If you want the object to be typed in TypeScript, you can define an interface or type and cast the result accordingly

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
