-- exemplo de uso do IF
SELECT first_name, last_name, IF(active, 'Cliente ativo', 'Cliente inativo') AS status FROM customer LIMIT 20;

-- exemplo de uso do CASE
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

-- EXERCÍCIOS

-- 1
SELECT
	film_id,
    title,
    IF(title = 'ACE GOLDFINGER', 'Já assisti esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM film;

-- 2
SELECT
	title,
    rating,
    CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS 'público-alvo'
FROM film;
