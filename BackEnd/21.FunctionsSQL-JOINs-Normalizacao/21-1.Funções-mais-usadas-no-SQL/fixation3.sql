-- exemplos das funções matemáticas do sql

-- DIV
SELECT 10 DIV 3; # traz 3 como resultado pois a função ignora casas decimais

-- MOD
SELECT 10.5 MOD 2; # 0.5

-- EXERCÍCIOS (DIV e MOD)

-- 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- 2
SELECT 220 DIV 12 AS 'Grupos de 12';

-- 3
SELECT 220 MOD 12 AS 'Lugares sobrando';

-- ROUND
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11 (segue a regra de arredondar pra cima caso seja 0.5 ou mais)

-- CEIL (arredonda para cima)
SELECT CEIL(10.1); -- 11

-- FLOOR (arredonda para baixo)
SELECT FLOOR(10.9); -- 10

-- POW (eleva um número a outro)
SELECT POW(2, 4); -- 16

-- SQRT (tira a raíz quadrada de um número)
SELECT SQRT(16); -- 4

-- RAND (gera um número aleatório)
SELECT RAND();

-- como gerar um número aleatório entre dois valores
SELECT ROUND(3 + (RAND() * 22)); -- sendo 3 o mínimo e 25 o máximo

-- EXERCÍCIOS

-- 1
SELECT ROUND(15 + (RAND() * 5));

-- 2
SELECT ROUND(15.7515971, 5);

-- 3
SELECT FLOOR(39.494);

-- 4
SELECT CEIL(85.234);
