-- STORED FUNCTIONS

-- tipos de retorno comuns:
--   DETERMINISTIC - retorna o mesmo valor ao receber os mesmos dados de entrada
--   READS SQL DATA (mais comum) - indica que a função somente lerá dados

-- estrutura:
--   USE banco_de_dados; # obrigatório para criar a função no banco correto
--   DELIMITER $$
--   CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
--   RETURNS tipo_de_dado tipo_de_retorno
--   BEGIN
--       query_sql
--       RETURN resultado_a_ser_retornado;
--   END $$
--   DELIMITER ;

-- EXEMPLOS:

--  -> traz quantidade de filmes que um ator ou atriz atuou
USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);

--  -> exibe nome completo de um ator ou atriz a partir do id
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);

-- EXERCÍCIOS

-- 1
DELIMITER $$

CREATE FUNCTION RetornaTotalDePagamentosPorCliente(id_cliente INT)
RETURNS NUMERIC READS SQL DATA
BEGIN
	DECLARE total INT;
	SELECT SUM(amount)
    FROM payment
    WHERE customer_id = id_cliente
    INTO total;
    RETURN total;
END $$

DELIMITER ;

SELECT RetornaTotalDePagamentosPorCliente(3);

-- 2
DELIMITER $$

CREATE FUNCTION RetornaTituloPorId(inventory_id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE titulo VARCHAR(100);
    SELECT title
    FROM film
    WHERE film_id = inventory_id
    INTO titulo;
    RETURN titulo;
END $$

DELIMITER ;

SELECT RetornaTituloPorId(420);

-- 3
DELIMITER $$

CREATE FUNCTION QuantidadeDeFilmesPorCategoria(category_name VARCHAR(30))
RETURNS NUMERIC READS SQL DATA
BEGIN
	DECLARE total INT;
    SELECT COUNT(fc.film_id) AS quantidade_filmes
	FROM film_category AS fc
	INNER JOIN category AS c
	ON c.category_id = fc.category_id
	WHERE c.name = category_name
    INTO total;
    RETURN total;
END $$

DELIMITER ;

SELECT QuantidadeDeFilmesPorCategoria('Drama');
