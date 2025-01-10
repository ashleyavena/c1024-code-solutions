Select
"films"."releaseYear",
"genres"."name"
from
"films"
inner join
"filmGenre" using ("filmId")
inner join
"genres" using ("genreId")
where "films"."title"= 'Boogie Amelie'



-- Use two joins to select the "releaseYear" and "genres"."name" of the film
-- with the "title" 'Boogie Amelie'.
-- There is a special table in the database named "filmGenre" for this purpose.
