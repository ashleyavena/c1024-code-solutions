# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  Structured Query Language: a domain-specific language used for managing/manipulating relational databases. To retrieve, insert, update, delete data in a database
  -for database operations & is declarative
  JavaScript: general-purpose programming language used for building web apps, client and server side
  -for programming logic/web interaction & is imperative

- How do you retrieve specific columns from a database table?
  use 'SELECT' statement and list column names
  EX:
  SELECT column1, column2 FROM table_name;

- How do you filter rows based on some specific criteria?
  use 'WHERE' condition

EX: SELECT \* FROM employees
WHERE department = 'Sales';

- What are the benefits of formatting your SQL?
  readable, maintainable, collaborative, error reduction

- What are four comparison operators that can be used in a `where` clause?
  =, <, >, <> or !=,
  <=,=>

- How do you limit the number of rows returned in a result set?
  use 'LIMIT'

EX: SELECT \* FROM employees
LIMIT 10;

- How do you retrieve all columns from a database table?
  use \* in the select statement

EX: SELECT \* FROM employees

- How do you control the sort order of a result set?
  use 'ORDER BY' with ascending or descending order

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
