const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// exercício 1

  const modifyObj = (obj, key, val) => {
    obj[key] = val;
    return obj;
  }
  modifyObj(lesson2, 'turno', 'noite');

// // exercício 2

const listKeys = (obj) => {
  return Object.keys(obj);
}
console.log(listKeys(lesson3));

// exercício 3

const countObj = (obj) => {
  return Object.entries(obj).length;
}
console.log(countObj(lesson2));

// exercício 4

const listValues = (obj) => {
  return Object.values(obj)
}
console.log(listValues(lesson1));

//  exercício 5

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

//  exercício 6

const getStudents = (obj) => {
  let allStudents = 0;
  for (let key in obj) {
    allStudents += obj[key]['numeroEstudantes'];
  }
  return allStudents
}
console.log(getStudents(allLessons));

// exercício 7

const getValueByNumber = (obj, posi) => {
  return Object.values(obj)[posi];
}

console.log(getValueByNumber(lesson3, 2));

// exercício 8

const verifyPair = (obj, key, val) => {
  let result = false;
  if (obj[key] == val) {
    result = true;
  }
  return result
}
console.log(verifyPair(lesson3, 'professor', 'Maria Clara'));

// bônus 1

const countStudents = (obj, val) => {
  let students = 0;

  for (let key in obj) {
    if (obj[key].materia == val) {
      students += obj[key].numeroEstudantes;
    }
  }
  return students
}
console.log(countStudents(allLessons, 'Matemática'));

// bônus 2

const createReport = (obj, val) => {
const report = {
  professor: '',
  aulas: [],
  estudantes: 0,
  }
  for (let key in obj) {
    if (obj[key].professor == val) {
      report.professor = obj[key].professor;
      report.aulas.push(obj[key].materia);
      report.estudantes += obj[key].numeroEstudantes; 
    }
  }
  return report
}
console.log(createReport(allLessons, 'Maria Clara'));
