-- exemplos de como trabalhar com datas

SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- exemplos DATEDIFF E TIME DIFF

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

-- manipulando funções de data e hora

SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

-- EXERCÍCIOS

-- 1
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

-- 2
SELECT TIMEDIFF('10:25:45', '11:00:00');
