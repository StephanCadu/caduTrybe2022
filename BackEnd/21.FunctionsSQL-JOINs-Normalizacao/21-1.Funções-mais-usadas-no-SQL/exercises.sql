-- EXERCÍCIOS

-- 1
SELECT MAX(salary) AS maior_salario FROM employees;

-- 2
SELECT MAX(salary) - MIN(salary) AS diferenca FROM employees;

-- 3
SELECT job_id, AVG(salary) AS media_salarial FROM employees GROUP BY job_id ORDER BY media_salarial DESC;

-- 4
SELECT SUM(salary) AS total FROM employees;

-- 5
SELECT
	ROUND(MAX(salary), 2) AS maior_salario,
    ROUND(MIN(salary), 2) AS menor_salario,
    ROUND(SUM(salary), 2) AS total,
    ROUND(AVG(salary), 2) AS media
FROM employees;

-- 6
SELECT COUNT(*) FROM employees WHERE job_id = 'IT_PROG';

-- 7
SELECT job_id, SUM(salary) AS soma_salarios FROM employees GROUP BY job_id;

-- 8
SELECT SUM(salary) AS salario_programadores FROM employees WHERE job_id = 'IT_PROG';

-- 9
SELECT job_id, AVG(salary) AS media_salarial FROM employees
WHERE job_id <> 'IT_PROG' GROUP BY job_id ORDER BY media_salarial DESC;

-- 10
SELECT department_id, AVG(salary) AS media, COUNT(*) AS funcionarios
FROM employees GROUP BY department_id HAVING funcionarios > 10;

-- 11
UPDATE employees
SET phone_number = REPLACE(phone_number, '515.', '777.')
WHERE phone_number LIKE '515.%';

-- 12
SELECT * FROM employees WHERE CHAR_LENGTH(first_name) >= 8;

-- 13
SELECT employee_id, first_name, YEAR(hire_date) AS ano_contratacao FROM employees;

-- 14
SELECT employee_id, first_name, DAY(hire_date) AS dia_contratacao FROM employees;

-- 15
SELECT employee_id, first_name, MONTH(hire_date) AS mes_contratacao FROM employees;

-- 16
SELECT UCASE(first_name) AS nomes_maiusculos FROM employees;

-- 17
SELECT last_name, hire_date FROM employees WHERE MONTH(hire_date) = 7;

-- 18
SELECT last_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS dias_trabalhando FROM employees;
