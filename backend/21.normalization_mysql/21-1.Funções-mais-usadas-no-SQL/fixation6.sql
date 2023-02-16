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

-- HAVING (filtra os resultados do GROUP BY)

-- exemplos de uso

-- 1
SELECT
    first_name,
    COUNT(*) AS nomes_cadastrados -- o alias não funciona com strings para o HAVING
FROM
    actor
GROUP BY
	first_name
HAVING
	nomes_cadastrados > 2
ORDER BY
	nomes_cadastrados DESC, first_name;

-- 2
SELECT
    rating, rental_rate, COUNT(1) AS total
FROM
    film
GROUP BY rental_rate , rating
HAVING total < 70
ORDER BY rating , rental_rate;

-- EXERCÍCIOS

-- 1
SELECT rating, AVG(length) AS duracao_media FROM film
GROUP BY rating HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

-- 2
SELECT rating, SUM(replacement_cost) AS custo_total FROM film
GROUP BY rating HAVING custo_total > 3950.50
ORDER BY custo_total;
