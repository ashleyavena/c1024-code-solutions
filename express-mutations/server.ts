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

app.use(express.json()); // mounts the json middleware, so if a req that comes in w json it will parse

// post = create
// actors is the endpoint, database requires async function
// $1 and $2

app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body; // in the body bc fN & lN being passed
    // TODO: validate request, make sure there's a first name & last name

    if (!firstName || !lastName) {
      throw new ClientError(400, 'First and last name required');
    }
    const sql = `
    insert into "actors" ("firstName", "lastName")
    values ($1, $2)
    returning *;
    `;

    // never do sequel injection like (${firstName}) always do $1

    const result = await db.query(sql, [firstName, lastName]);
    const actor = result.rows[0];
    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

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

// http POST localhost:8080/api/actors firstName="Brendan" lastName="Eich"

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const { firstName, lastName } = req.body;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    if (!firstName || !lastName) {
      throw new ClientError(404, 'Actor Id, First and Last name required');
    }

    const sql = `
    UPDATE "actors"
    SET "firstName"= $1, "lastName"=$2
    WHERE "actorId" =$3
    RETURNING * ;`;

    const params = [firstName, lastName, actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actor ${actorId} not found`);
    }
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
    const result = await db.query(sql, [actorId]);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `actorId ${actorId} not found`);
    }
    res.sendStatus(204); // 204 means no content, if u tell it to create that it deletes the body the only way to return the response is to call .send or .json
  } catch (err) {
    next(err);
  }
});

// http DELETE localhost:8080/api/actors/204

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
