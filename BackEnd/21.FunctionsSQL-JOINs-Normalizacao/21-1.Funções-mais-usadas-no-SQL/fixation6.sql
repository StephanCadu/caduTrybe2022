-- GROUP BY
SELECT first_name FROM actor GROUP BY first_name; -- 128 linhas pois agrupa registros iguais
SELECT first_name FROM actor; -- 200 linhas

-- GROUP BY é geralmente utilizado com funções matemáticas, por exemplo:
SELECT first_name, COUNT(*) FROM actor GROUP BY first_name;

-- é possível agrupar por mais de uma coluna
SELECT rating, rental_rate, COUNT(1) AS total FROM film GROUP BY rating, rental_rate ORDER BY rating, rental_rate;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM film
GROUP by rating;

-- EXERCÍCIOS GROUP BY

-- 1
SELECT COUNT(active) AS quantidade, IF(active, 'ativo', 'inativo') AS 'status' FROM customer GROUP BY active;

-- 2
SELECT store_id, IF(active, 'ativo', 'inativo') AS 'status', COUNT(active) AS 'quantidade'
FROM customer GROUP BY active, store_id ORDER BY store_id;

-- 3
SELECT rating, AVG(rental_duration) AS 'rental duration average'
FROM film GROUP BY rating ORDER BY AVG(rental_duration) DESC;

-- 4
SELECT district, COUNT(address) AS 'endereços registrados'
FROM address GROUP BY district ORDER BY COUNT(address) DESC;
