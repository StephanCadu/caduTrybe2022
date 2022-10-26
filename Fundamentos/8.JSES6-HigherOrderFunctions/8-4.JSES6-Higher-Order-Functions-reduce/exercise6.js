const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

/** criar um novo array de objetos no modelo:
 * { name: nome do aluno, average: media das notas }
*/
const studentAverage = grades.map((elm, ind) => ({
  name: students[ind],
  average: (elm.reduce((x, y) => x + y)) / elm.length,
}));

console.log(studentAverage);
