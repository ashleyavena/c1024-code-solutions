select
"customers"."firstName",
"customers"."lastName",
SUM("payments"."amount") as "total"
from
"payments"
inner join
"customers" on "payments"."customerId" = "customers"."customerId"
group by
"customers"."customerId", "customers"."firstName", "customers"."lastName"
order by
"total" desc;



-- List the first and last name of all customers,
-- plus the total amount they've spent on rentals.
-- Order them by total paid, descending.
-- Hint: You need to group the customer rows together and sum up their rental amounts.
-- Hint: Karl Seal should be first with $221.55 paid.
