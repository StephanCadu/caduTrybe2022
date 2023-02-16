-- EXERCÍCIOS

-- 1
SELECT e.first_name, m.first_name
FROM employees AS e
INNER JOIN employees AS m
ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;

-- 2
SELECT * FROM employees;
SELECT m.first_name, COUNT(*)
FROM employees AS m
INNER JOIN employees AS e
ON m.employee_id = e.manager_id
GROUP BY m.employee_id;