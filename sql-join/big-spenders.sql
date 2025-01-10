Select
"customers"."firstName",
"customers"."lastName",
"payments"."amount"
from
"customers"
join
"payments" using ("customerId")
order by
"payments"."amount" desc
Limit 10;

-- Select the 10 largest payment amounts, including the first and last name of the customer who paid.
