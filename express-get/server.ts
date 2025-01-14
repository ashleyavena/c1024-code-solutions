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

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = await db.query(`
      SELECT *  FROM "films"
      ORDER BY "replacementCost" DESC
      LIMIT 2;
    `);
    res.json(sql.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, 'filmId must be an integer');
    }
    const sql = `select * from "films" where "filmId" =$1`;
    const result = await db.query(sql, [filmId]);
    const film = result.rows[0];
    if (!film) throw new ClientError(404, `Film ${filmId} not found`);
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware); // always make sure middleware is at bottom

app.listen(8080, () => {
  console.log('listening on port 8080');
});
