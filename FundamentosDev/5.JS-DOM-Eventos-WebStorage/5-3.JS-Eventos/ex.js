function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// EXERCÍCIO 1


function createDays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.querySelector('#days');
    
  for (let day of dezDaysList) {
    const criados = day;
    const diaCriado = document.createElement('li');
    diaCriado.innerText = criados;
    diaCriado.classList.add('day')

    if (day === 24 || day === 25 || day === 31) {
       diaCriado.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
        diaCriado.classList.add('friday');
     }

    ulDays.appendChild(diaCriado); 
  };
};
createDays();

// EXERCÍCIO 2
const btn = document.createElement('BUTTON');
function createButton (string) {   
  btn.innerText = string;
  btn.id = 'btn-holiday';

  const container = document.querySelector('.buttons-container');
  container.appendChild(btn);

}
createButton('Feriados')

// EXERCÍCIO 3
function holidayColors() {
  const botao = document.querySelector('#btn-holiday');
  const feriados = document.querySelectorAll('.holiday');
  let color1 = 'green';
  let color2 = 'rgb(238,238,238)';
  botao.addEventListener('click', function () {
    for (let dia of feriados) {
      if (dia.style.backgroundColor === color1) {
        dia.style.backgroundColor = color2;
        dia.style.color = '#777';
      } else {
        dia.style.backgroundColor = color1;
        dia.style.color = 'white';  
      }
    }  
  });
}
holidayColors();

// EXERCÍCIO 4

const fridayBtn = document.createElement('BUTTON');
function createFridayBtn () {
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerText = 'Sexta-feira'
  document.querySelector('.buttons-container').appendChild(fridayBtn);
}
createFridayBtn();

// EXERCÍCIO 5

function sextou (arraySex) {
  const botao = document.querySelector('#btn-friday');
  const sextas = document.querySelectorAll('.friday');
  let text = '6TOU!';

  botao.addEventListener('click', function () {
    for (let sex = 0; sex < sextas.length; sex += 1) {
      if (sextas[sex].innerText !== text) {
        sextas[sex].innerText = text;  
      } else {
        sextas[sex].innerText = arraySex[sex];  
      }
    }
  })
};
let array = [4, 11, 18, 25];
sextou(array);

// // EXERCÍCIO 6

function zoomIn () {
  const dias = document.querySelector('#days');
  
  dias.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600px';
  })
}
zoomIn();


function zoomOut () {
  const dias = document.querySelector('#days');
    
  dias.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
 
  })
}
zoomOut();

// EXERCÍCIO 7

function addTasks (string) {
  const tasks = document.querySelector('.my-tasks');
  const newSpan = document.createElement('span');
  newSpan.innerText = string;

  tasks.appendChild(newSpan);
}


  addTasks('estudar');



// EXERCÍCIO 8

function addTaskColor (cor) {
  const tasks = document.querySelector('.my-tasks');
  const newDiv = document.createElement('div');
  newDiv.style.backgroundColor = cor;
  newDiv.classList.add('task');

  tasks.appendChild(newDiv);
}
addTaskColor('violet');

// EXERCÍCIO 9

function select () {
  const colored = document.querySelector('.task');
  const selected = document.getElementsByClassName('task selected');

  colored.addEventListener('click', function (event) {
    if (selected.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';  
    } 
  })
}
select();

// EXERCÍCIO 10 

function addDayColor () {
  const dias = document.querySelector('#days');
  const cor = document.querySelector('.task');

  dias.addEventListener('click', function (event) {
      if (event.target.style.color !== cor.style.backgroundColor) {
        event.target.style.color = cor.style.backgroundColor;
      } else {
        event.target.style.color = 'rgb(119,119,119)';
      }
  })
}
addDayColor();

// BÔNUS 

function commitment () {
  const compromissosUl = document.querySelector('.task-list');  
  const compromissos = document.createElement('li');
  const addBtn = document.querySelector('#btn-add');
  const input = document.querySelector('#task-input');
  
  addBtn.addEventListener('click', function () {
    compromissosUl.appendChild(compromissos);
    compromissos.innerText = input.value;
  })
}
commitment();