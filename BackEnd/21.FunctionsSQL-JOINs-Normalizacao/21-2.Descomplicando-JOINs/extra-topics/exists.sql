-- EXISTS

-- retorna dados de uma tabela que se relacionam com dados de outra tabela

-- EXERCÍCIOS

-- 1
SELECT id, title FROM books AS b WHERE NOT EXISTS (
	SELECT * FROM books_lent AS bl WHERE b.id = bl.book_id
);

-- 2
SELECT id, title FROM books AS b WHERE EXISTS (
	SELECT * FROM books_lent AS bl WHERE bl.returned = 1 AND b.title LIKE '%lost%'
);

-- 3
SELECT name FROM customers AS cus WHERE NOT EXISTS (SELECT * FROM carsales AS car WHERE cus.CustomerId = car.CustomerId);

-- 4
SELECT cus.name, car.name FROM carsales AS cs
INNER JOIN cars AS car ON car.Id = cs.CarId
RIGHT JOIN customers AS cus ON cus.CustomerId = cs.CustomerId
WHERE EXISTS (SELECT * FROM customers AS cus WHERE cus.CustomerId = cs.CustomerId);
