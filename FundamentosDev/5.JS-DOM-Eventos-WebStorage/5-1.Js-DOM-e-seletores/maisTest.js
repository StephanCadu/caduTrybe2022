let urgentes = document.getElementsByClassName('emergency-tasks')[0];
let naoUrgentes = document.getElementsByClassName('no-emergency-tasks')[0];

urgentes.style.backgroundColor = 'rgba(236, 161, 111, 0.976)';
naoUrgentes.style.backgroundColor = 'rgb(246, 238, 8)';

let urgImp = document.getElementById('urgenteImp');

urgImp.style.backgroundColor = 'rgb(243, 51, 51)';

let urgNaoImp = document.getElementById('urgenteNaoImp');

urgNaoImp.style.backgroundColor = 'rgb(223, 97, 229)';

let ultimosH3 = document.getElementsByClassName('naoImpH3');
console.log(ultimosH3);

for (let ind of ultimosH3) {  
  ind.style.backgroundColor = 'black';
};




 