import 'dotenv/config'; // imports all the ports and env needed
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      SELECT *
        FROM "products"
        ORDER BY "productId";
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!Number.isInteger(productId) || productId < 1) {
      throw new ClientError(404, 'productId must be a positive integer');
    }
    const sql = `
      SELECT *
        FROM "products"
        WHERE "productId" = $1;
    `;
    const result = await db.query<Product>(sql, [productId]);
    if (result.rows.length === 0) {
      throw new ClientError(404, 'productId must be a positive integer');
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`);
});

// type Todo = {
//   entryId: number;
//   task: string;
//   isCompleted: boolean;
//   createdAt: string;
//   updatedAt: string;
// };

// app.get('/api/products', async (req, res, next) => {
//   try {
//     const sql = `
//       select *
//         from "products"
//         order by "productId"
//     `;
//     const result = await db.query<Product>(sql);
//     res.json(result.rows);
//   } catch (err) {
//     next(err);
//   }
// });

// app.get('/api/products/:productId', async (req, res, next) => {
//   try {
//     const productId = Number(req.params.productId);
//     if (!Number.isInteger(productId) || productId < 1) {
//       throw new ClientError(400, 'productId must be a positive integer');
//     }

//     const sql = `
//       SELECT *
//         FROM "products"
//         WHERE "productId" = $1
//     `;

//     const result = await db.query<Product>(sql);

//     if (result.rows.length === 0) {
//       res
//         .status(404)
//         .json({ error: `Product with productId ${productId} not found` });
//       return;
//     }

//     res.json(result.rows[0]);
//   } catch (err) {
//     next(err);
//   }
// });

// app.post('/api/todos', async (req, res, next) => {
//   try {
//     const { task, isCompleted = false } = req.body;
//     if (!task || typeof isCompleted !== 'boolean') {
//       throw new ClientError(400, 'task and isCompleted are required');
//     }
//     const sql = `
//       insert into "todos" ("task", "isCompleted")
//         values ($1, $2)
//         returning *
//     `;
//     const params = [task, isCompleted];
//     const result = await db.query<Todo>(sql, params);
//     const [todo] = result.rows;
//     res.status(201).json(todo);
//   } catch (err) {
//     next(err);
//   }
// });

// app.put('/api/todos/:todoId', async (req, res, next) => {
//   try {
//     const todoId = Number(req.params.todoId);
//     if (!Number.isInteger(todoId) || todoId < 1) {
//       throw new ClientError(400, 'todoId must be a positive integer');
//     }
//     const { task, isCompleted } = req.body;
//     if (typeof isCompleted !== 'boolean') {
//       throw new ClientError(400, 'isCompleted (boolean) is required');
//     }
//     const sql = `
//       update "todos"
//         set "updatedAt" = now(),
//             "isCompleted" = $1,
//             "task" = $2
//         where "todoId" = $3
//         returning *
//     `;
//     const params = [isCompleted, task, todoId];
//     const result = await db.query<Todo>(sql, params);
//     const [todo] = result.rows;
//     if (!todo) {
//       throw new ClientError(404, `cannot find todo with todoId ${todoId}`);
//     }
//     res.json(todo);
//   } catch (err) {
//     next(err);
//   }
// });
