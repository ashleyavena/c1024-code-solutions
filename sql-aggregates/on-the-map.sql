select "countries"."name" as "countryName",
  count("cityId") as "TotalNumberCities"
from "countries"
join "cities"  on "countries"."countryId" = "cities"."countryId"
group by  "countries"."countryId", "countries"."name";

-- select count(*) as "TotalNumberCities"
-- "countries"."name" as "countryName",
-- from "countries"
-- join "cities"  on "countries"."countryId" = "cities"."countryId"
-- group by  "countries"."countryId", "countries"."name";


-- List the number of "cities" per country in the "countries" table.


-- Hint: "per country" implies that you will need to group by the country.

-- Hint: There should be 35 in the United States, for example.
