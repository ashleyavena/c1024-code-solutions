import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      throw new ClientError(400, 'First and last name required');
    }
    const sql = `
    insert into "actors" ("firstName", "lastName")
    values ($1, $2)
    returning *;
    `;
    const params = [firstName, lastName];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

// http POST localhost:8080/api/actors firstName="Brendan" lastName="Eich"

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const { firstName, lastName } = req.body;
    if (!actorId || !firstName || !lastName) {
      throw new ClientError(404, 'Actor Id, First and Last name required');
    }

    const sql = `
    UPDATE "actors"
    SET "firstName"= $1, "lastName"=$2
    WHERE "actorId" =$3
    RETURNING * ;`;

    const params = [firstName, lastName, actorId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
    const actor = result.rows[0];
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

// http PUT localhost:8080/api/actors/204 firstName="James" lastName="Gosling"

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!actorId) {
      throw new ClientError(404, `actorId ${actorId} not found`);
    }

    const sql = `
      DELETE FROM "actors"
      WHERE "actorId" = $1
      RETURNING *;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.status(204).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// http DELETE localhost:8080/api/actors/204

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
