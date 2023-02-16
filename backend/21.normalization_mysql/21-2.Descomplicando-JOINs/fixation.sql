-- INNER JOIN (busca campos iguais)

SELECT cit.city, cit.country_id, coun.country
FROM city AS cit
INNER JOIN country AS coun
ON cit.country_id = coun.country_id;

SELECT fi.title, fi.language_id, la.name
FROM film AS fi
INNER JOIN language AS la
ON fi.language_id = la.language_id;

-- o alias AS pode ser omitido
SELECT a.first_name, a.actor_id, f.actor_id
FROM actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;

-- EXERCÍCIOS

-- 1
SELECT a.actor_id, a.first_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- 2
SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

-- 3
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- 4
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- 5
SELECT c.first_name, COUNT(a.address)
FROM customer AS c
INNER JOIN address AS a
ON c.customer_id = a.address_id
WHERE c.active IS TRUE
GROUP BY c.customer_id
ORDER BY c.first_name DESC;


-- 6
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(payment_date) = '2006'
GROUP BY s.first_name, s.last_name;

-- 7
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN film AS f
ON fa.film_id = f.film_id;
