-- COMANDO PARA CRIAR DUMP: mysqldump -u root -pnarutin `banco_de_dados` > `nome_do_arquivo`
-- COMANDO PARA RECUPERAR DUMP: mysqldump -u root -pnarutin `banco_de_dados` < `nome_do_arquivo`

-- COMO CLONAR UMA TABELA
CREATE TABLE staff_clone LIKE sakila.staff;
SELECT * FROM staff_clone;

-- COMO CRIAR UMA VIEW
USE sakila;
CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;

SELECT * FROM top_10_customers;
DROP VIEW top_10_customers;

-- ALTER TABLE

-- criando tabela para teste
USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;
SELECT * FROM noticia;

-- TIPOS DE ALTERAÇÕES:

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

-- Comando para mostrar a estrutura das colunas:
SHOW COLUMNS FROM noticia;

-- INDEX

-- TIPOS:
--   PRIMARY KEY
--   UNIQUE
--   INDEX
--   FULL TEXT INDEX

-- Criando um índice em uma coluna
-- CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
-- ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
-- CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
-- ON tabela (coluna1, coluna2);

-- Excluindo índices
-- DROP INDEX nome_do_indice ON tabela;

CREATE INDEX index_first_name ON sakila.actor(first_name);
DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- EXERCÍCIOS:

-- VIEWS

-- 1
CREATE VIEW film_with_categories AS
SELECT f.title, c.category_id, c.name
FROM film AS f
JOIN film_category AS fc
ON fc.film_id = f.film_id
JOIN category AS c
ON fc.category_id = c.category_id
ORDER BY f.title;

SELECT * FROM film_with_categories;

-- 2
CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
FROM actor AS a
JOIN film_actor AS fa
ON fa.actor_id = a.actor_id
JOIN film AS f
ON f.film_id = fa.film_id
ORDER BY actor;

SELECT * FROM film_info;

-- 3
CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, c.city_id, c.city
FROM address AS a
JOIN city AS c
ON c.city_id = a.city_id
ORDER BY c.city;

SELECT * FROM address_info;

-- 4
CREATE VIEW movies_languages AS
SELECT f.title, l.language_id, l.name
FROM film AS f
JOIN language AS l
ON l.language_id = f.language_id;

SELECT * FROM movies_languages;
