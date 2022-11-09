-- SUBQUERY

-- EXEMPLOS:

-- como fonte de dados para o FROM
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

-- como coluna de um SELECT
SELECT
	address,
	district,
    (
		SELECT city
        FROM city
        WHERE city_id = sakila.address.city_id
    ) AS city
FROM address;

-- como filtro no WHERE
SELECT address, district FROM address
WHERE city_id IN ( SELECT city_id FROM city WHERE city IN ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan'));

-- usando uma tabela externa dentro de uma SUBQUERY (query cost: 124)
SELECT
	first_name,
    (
		SELECT address
        FROM address
        WHERE address_id = externa.address_id
    ) AS address
FROM customer AS externa;

-- traz o mesmo resultado da quey acima, mas usando INNER JOIN (query cost: 834)
SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;

-- nesse caso a resolução com SUBQUERY seria mais performática devido ao query cost mais baixo