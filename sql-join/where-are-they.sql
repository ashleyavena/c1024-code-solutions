Select
"addresses"."line1",
"addresses"."district",
"cities"."name" as "cityName",
"countries"."name" as "countryName"
from
"addresses"
inner join
"cities" on "addresses"."cityId" = "cities"."cityId"
inner join
"countries" on "cities"."countryId" = "countries"."countryId";

-- Select
-- "addresses"."line1",
-- "addresses"."district",
-- "cities"."name" as "cityName",
-- "countries"."name" as "countryName"
-- from
-- "addresses"
-- join
-- "cities" using ("cityId")
--  join
-- "countries" using ("countryId")

-- Generate a list of all addresses in the system that includes
-- their "line1", "cities"."name", and "district".
-- Bragging rights if you get the name of the country in there too (which requires an extra join).
