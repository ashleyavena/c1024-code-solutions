# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  a column in a table that establishes a link btw data in 2 tables

- How do you join two SQL tables? (Provide at least two syntaxes.)
  SELECT table1.column1, table2.column2
  FROM table1
  INNER JOIN table2
  ON table1.common_column = table2.common_column;

old style:
SELECT table1.column1, table2.column2
FROM table1, table2
WHERE table1.common_column = table2.common_column;

- How do you temporarily rename columns or tables in a SQL statement?
  you can use alias's
  SELECT column_name AS alias_name
  FROM table_name;

- How do you create a one-to-many relationship between two tables?
  the child table has a foreign key referencing the primary key of the parent table

- How do you create a many-to-many relationship between two tables?
  use junction table that includes foreign keys referencing the primary keys of the 2 tables

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
