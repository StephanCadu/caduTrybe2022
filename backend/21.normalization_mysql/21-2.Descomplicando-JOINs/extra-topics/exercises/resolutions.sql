-- EXERCÍCIOS

-- 1
SELECT title FROM movies
WHERE id IN (
	SELECT movie_id
    FROM boxoffice
    WHERE domestic_sales + international_sales > 500000000
) AND length_minutes > 110;

SELECT title
FROM movies AS m
INNER JOIN boxoffice AS b
ON m.id = b.movie_id
WHERE b.domestic_sales + b.international_sales > 500000000
AND m.length_minutes > 110;

-- 2
DELIMITER $$

CREATE TRIGGER AtualizaDataAoInserir
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(current_date());
END $$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER AdicionaRegistroAoInserir
AFTER INSERT ON movies
FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'INSERT', CURRENT_DATE());
END $$

DELIMITER ;

INSERT INTO movies (ticket_price, ticket_price_estimation) VALUES (10.00, '15');

SELECT * FROM movies;
SELECT * FROM movies_logs;

-- 3
DELIMITER $$

CREATE TRIGGER ComparaPrecoDoTicket
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
END $$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER AdicionaRegistroAoAlterar
AFTER UPDATE ON movies
FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'UPDATE', CURRENT_DATE());
END $$

DELIMITER ;

UPDATE movies SET ticket_price = 23 WHERE movie_id = 2;

SELECT * FROM movies;
SELECT * FROM movies_logs;

-- 4
DELIMITER $$

CREATE TRIGGER AdicionaRegistroAoDeletar
AFTER DELETE ON movies
FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (OLD.movie_id, 'DELETE', CURRENT_DATE());
END $$

DELIMITER ;

DELETE FROM movies WHERE movie_id = 2;

SELECT * FROM movies;
SELECT * FROM movies_logs;

-- 5
SELECT t.name, t.location
FROM theater AS t
WHERE EXISTS(
	SELECT * FROM movies AS m WHERE m.theater_id = t.id
);

-- 6
SELECT t.name, t.location
FROM theater AS t
WHERE NOT EXISTS(
	SELECT * FROM movies AS m WHERE m.theater_id = t.id
);