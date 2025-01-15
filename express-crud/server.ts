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

type Grade = {
  name: string;
  course: string;
  score: number;
};

const app = express();

app.use(express.json()); // Mounts the json middleware, if a req comes in with json it will parse

// returns all rows from the grades table
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      SELECT * FROM "grades";
    `;
    const result = await db.query(sql); // Directly return the rows, whether it's an empty array or contains data
    res.json(result.rows); // 200 is the default status so you don't have to set it
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
});

// returns the row from the grades table with the given gradeId
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    // input validation
    if (!Number.isInteger(+gradeId) || +gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer'); // Validate that gradeId is a positive integer
    }
    const sql = `
    select * from "grades"
    where "gradeId" = $1;
    `;
    const result = await db.query(sql, [gradeId]); // bc $1 in sql we need to pass array
    const grade = result.rows[0];
    validateGradeExists(grade, gradeId);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});
// inserts a new grade into the grades table and returns the entire created grade
app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body as Grade;
    // input validation
    validateBody(name, course, score);
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1,$2,$3)
      returning *;
      `;
    const result = await db.query<Grade>(sql, [name, course, score]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});
// updates the grade in the grades table with the given gradeId
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    const id = +gradeId; // Parse gradeId and score
    const parsedScore = +score;

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
    const result = await db.query<Grade>(sql, [name, course, parsedScore, id]);
    const grade = result.rows[0];
    validateGradeExists(grade, gradeId);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

//  deletes the grade in the grades table with the given gradeId.
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
        delete from "grades"
        where "gradeId" = $1
        returning *;
        `;
    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    validateGradeExists(grade, gradeId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Express server is listening on port 8080');
});

function validateGradeId(gradeId: string): void {
  if (!Number.isInteger(+gradeId) || +gradeId <= 0) {
    throw new ClientError(400, 'gradeId must be a positive integer'); // Validate that gradeId is a positive integer
  }
}

function validateBody(name: string, course: string, score: number): void {
  if (!name || !course || score === undefined) {
    throw new ClientError(400, 'name, & course & score required');
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    throw new ClientError(400, 'score must be integer between 0 and 100');
  }
}

function validateGradeExists(grade: Grade | undefined, gradeId: string): void {
  if (!grade) {
    throw new ClientError(404, `gradeId ${gradeId} does not exist in database`);
  }
}
