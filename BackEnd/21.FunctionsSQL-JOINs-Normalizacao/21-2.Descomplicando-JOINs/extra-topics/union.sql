-- EXERCÍCIOS

-- 1
(SELECT first_name, last_name FROM staff)
UNION ALL
(SELECT first_name, last_name FROM actor);

-- 2
(SELECT first_name FROM customer WHERE first_name LIKE '%tracy%')
UNION
(SELECT first_name FROM actor WHERE first_name LIKE '%je%');

-- 3
(SELECT first_name FROM actor ORDER BY first_name DESC LIMIT 5)
UNION ALL
(SELECT first_name FROM staff LIMIT 1)
UNION ALL
(SELECT first_name FROM customer LIMIT 5 OFFSET 14)
ORDER BY first_name;

-- 4
(SELECT first_name, last_name FROM actor)
UNION ALL
(SELECT first_name, last_name FROM customer)
ORDER BY first_name LIMIT 15 OFFSET 45;
