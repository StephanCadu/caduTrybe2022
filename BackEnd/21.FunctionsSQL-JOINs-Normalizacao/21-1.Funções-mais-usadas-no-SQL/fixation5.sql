-- principais funções matemáticas
SELECT AVG(replacement_cost) FROM film;
SELECT MIN(replacement_cost) FROM film;
SELECT MAX(replacement_cost) FROM film;
SELECT SUM(replacement_cost) FROM film;

-- EXERCÍCIOS

-- 1
SELECT
	AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(length) AS 'Filmes Registrados'
FROM film;

-- a função COUNT não conta valores nulos,
-- porém existe a função coalesce que
-- transforma um valor nulo em qualquer coisa.
-- a sintaxe é: coalesce(coluna, 'valor')

-- então quando usar o COUNT com uma tabela que
-- pode ter valores nulos, usa-se:
-- COUNT(COALESCE(coluna, 'valor'))