-- EXERCÍCIOS

-- 1
SELECT m.title, b.domestic_sales, b.international_sales
FROM boxoffice AS b
INNER JOIN movies AS m
WHERE b.movie_id = m.id;

-- 2
SELECT m.title, (b.domestic_sales + b.international_sales) AS vendas_totais
FROM boxoffice AS b
INNER JOIN movies AS m
ON m.id = b.movie_id
WHERE b.domestic_sales < b.international_sales;

-- 3
SELECT m.title, b.rating
FROM movies AS m
INNER JOIN boxoffice AS b
ON b.movie_id = m.id
ORDER BY rating DESC;

-- 4
SELECT t.*, m.*
FROM theater AS t
LEFT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- 5
SELECT m.*, t.*
FROM theater AS t
RIGHT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- 6
SELECT m.*
FROM movies AS m
INNER JOIN boxoffice AS b
ON b.movie_id = m.id
WHERE m.theater_id IS NOT NULL
AND b.rating > 8;
