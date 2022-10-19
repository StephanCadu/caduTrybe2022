-- STORED PROCEDURES

-- estrutura:
--   USE banco_de_dados; # obrigatório para criar a procedure no banco correto
--   DELIMITER $$ # definindo delimitador
--   CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) # parâmetros
--   BEGIN -- delimitando o início do código SQL
--   END $$ -- delimitando o final do código SQL
--   DELIMITER ; # muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário

-- sem parâmetros
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
	SELECT * FROM sakila.actor;
END $$

DELIMITER ;
-- para usar: CALL ShowAllActors();

-- CRIANDO E USANDO UMA VARIÁVEL EM SQL:
-- SET @variavel = 'valor';
-- SELECT @variavel;

-- com parâmetro de entrada (IN)
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;
-- para usar: CALL ShowActorsWithSyllable('lope');

-- com parâmetro de saída (OUT)
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;
-- para usar:
--   CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
--   SELECT @media_de_dias;

-- com parâmetro de entrada e saída (IN-OUT)
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;
-- para usar:
--  SELECT 'ACE GOLDFINGER' INTO @movie_title;
--  CALL NameGenerator(@movie_title);
--  SELECT @movie_title;

-- EXERCÍCIOS

-- 1
DELIMITER $$

CREATE PROCEDURE Exhibit10MostPopularActors()
BEGIN
	SELECT
		CONCAT(a.first_name, ' ', a.last_name) AS actor_fullname,
		COUNT(f.film_id) AS quantidade_filmes
	FROM film_actor AS f
	INNER JOIN actor AS a
	ON a.actor_id = f.actor_id
	GROUP BY a.actor_id ORDER BY quantidade_filmes DESC LIMIT 10;
END $$

DELIMITER ;

CALL Exhibit10MostPopularActors();

-- 2
DELIMITER $$

CREATE PROCEDURE ExhibitFilmDetails(IN search_category VARCHAR(25))
BEGIN
	SELECT
		fc.film_id,
		f.title,
		c.category_id,
		c.name
	FROM film_category AS fc
	INNER JOIN film AS f ON fc.film_id = f.film_id
	INNER JOIN category AS c ON fc.category_id = c.category_id
	WHERE c.name = search_category;
END $$

DELIMITER ;

CALL ExhibitFilmDetails('Children');

-- 3
DELIMITER $$

CREATE PROCEDURE VerifyIfCustomerIsActive(IN search_email VARCHAR(50), OUT is_active VARCHAR(20))
BEGIN
	SELECT IF(active, 'Cliente ativo', 'Cliente inativo') AS customer_status FROM customer WHERE email = search_email;
END $$

DELIMITER ;

CALL VerifyIfCustomerIsActive('SANDRA.MARTIN@sakilacustomer.org', @customer_status);
CALL VerifyIfCustomerIsActive('BARBARA.JONES@sakilacustomer.org', @customer_stats);
