import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json()); // Mounts the json middleware, if a req comes in with json it will parse

// returns all rows from the grades table
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select * from "grades";
    `;
    const result = await db.query(sql);
    if (result.rows.length === 0) {
      return res.status(200).json([]); // If there are no rows, return an empty array
    }
    res.status(200).json(result.rows); // Return all rows
  } catch (err) {
    next(err); // Pass the error to the error middleware
  }
});

// returns the row from the grades table with the given gradeId
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const id = +gradeId;
    if (!Number.isInteger(id) || id <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer'); // Validate that gradeId is a positive integer
    }
    const sql = `
    select * from "grades"
    where "gradeId" = $1;
    `;
    const params = [id];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `gradeId ${gradeId} not found`); // If gradeId does not exist, return a 404 error
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});
// inserts a new grade into the grades table and returns the entire created grade
app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || score === undefined) {
      throw new ClientError(400, 'name, course, score required');
    }
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      throw new ClientError(400, 'score must be integer between 0 and 100');
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1,$2,$3)
      returning *;
      `;
    const result = await db.query(sql, [name, course, score]);
    const grades = result.rows[0];
    res.status(201).json(grades);
  } catch (err) {
    next(err);
  }
});
// updates the grade in the grades table with the given gradeId
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    const id = parseInt(gradeId, 10); // Parse gradeId and score
    const parsedScore = parseInt(score, 10);
    if (
      !name ||
      !course ||
      isNaN(parsedScore) ||
      parsedScore < 0 ||
      parsedScore > 100
    ) {
      throw new ClientError(
        400,
        'Invalid input: name, course, and score (between 0 and 100) are required.'
      );
    }
    if (isNaN(id) || id <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
      update "grades"
      set "name"=$1, "course"=$2, "score"=$3
      where "gradeId" =$4
      returning *;
    `;
    const result = await db.query(sql, [name, course, parsedScore, id]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `gradeId ${gradeId} not found`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});
//  deletes the grade in the grades table with the given gradeId.
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const id = +gradeId;
    if (!Number.isInteger(id) || id <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer'); // Validate that gradeId is a positive integer
    }
    const sql = `
        delete from "grades"
        where "gradeId" = $1
        returning *;
        `;
    const result = await db.query(sql, [id]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(
        404,
        `gradeId ${gradeId} does not exist in database`
      );
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Express server is listening on port 8080');
});
