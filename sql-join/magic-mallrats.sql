Select
"customers"."firstName",
"customers"."lastName",
"films"."title"
from
"customers"
inner join
"rentals" on "customers"."customerId" = "rentals"."customerId"
inner join
"films" on "rentals"."customerId" = "films"."filmId"
where
"films"."title" = 'Magic Mallrats';


-- SELECT table1.column1, table2.column2
--   FROM table1
--   INNER JOIN table2
--   ON table1.common_column = table2.common_column;
