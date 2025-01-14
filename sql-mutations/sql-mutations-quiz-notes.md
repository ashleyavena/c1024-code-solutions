# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

Operation SQL
Create Insert
Read Select
Update Update
Delete Delete

- How do you add a row to a SQL table?

INSERT INTO table_name (column1, column2)
VALUES (value1, value2)

- How do you add multiple rows to a SQL table at once?
  include VALUES lists

- How do you update rows in a database table?
  UPDATE statement with a SET clause

  EX:UPDATE table_name
  SET column1 = value1, column2 = value2
  WHERE condition;

- How do you delete rows from a database table?
  DELETE FROM table_name
  WHERE condition

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  WHERE clause ensures only specific rows are affected, without it update modifies all rows and delete removes all rows

- How do you accidentally delete or update all rows in a table?
  by omitting the where clause

- How do you get back the modified row without a separate `select` statement?
  use RETURNING clause

EX: UPDATE table_name
SET column1 = value1
WHERE condition
RETURNING \*;

- Why did you get an error when trying to delete certain films?
  foreign key constraints? referencing another table

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
