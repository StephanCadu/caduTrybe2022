// NÃO ESTÁ TERMINADA

// acessa 'elementoOndeVoceEsta'  
  console.log(document.getElementById('elementoOndeVoceEsta'));

// acessa pai a partir de 'elementoOndeVoceEsta'  
let pai = document.getElementById('elementoOndeVoceEsta').parentNode;

// muda a cor de pai  
  pai.style.color = 'red';

// terceiro filho a partir de pai   
  console.log(pai.childNodes[5]);

let primeiroFidoFi = document.getElementById('primeiroFilhoDoFilho');

// muda texto do primeiro filho
  primeiroFidoFi.innerText = 'Primeiro filhão do filhão'

// acessa primeiro filho a partir de pai 
  console.log(document.getElementById('pai').firstElementChild);  

let ondeEstou = document.getElementById('elementoOndeVoceEsta');

// // acessa primeiroFilho a partir de ondeEstou
  console.log(ondeEstou. previousElementSibling);
  
// // acessa 'Atenção!' a partir de ondeEstou  
  console.log(ondeEstou.nextSibling); 

// // acessa terceiroFilho a partir de ondeEstou
  console.log(ondeEstou.nextElementSibling); 


let father = document.getElementById('pai');

function createH3 () {
  let novoH3 = document.createElement('h3');
  novoH3.innerText = 'Onde está o irmão?'
    
  father.appendChild(novoH3);
 
  return novoH3;
}
createH3();

function createUl () {
  let novaUl = document.createElement('ul');
  father.appendChild(novaUl);

  return novaUl;
}
createUl

let listItems = ['o', 'irmão', 'está', 'bem', 'aqui'];  

function addLi() {
  for (let string = 0; string < listItems.length; string += 1) {
    let item = listItems[string];

    let liDaUl = document.createElement('li');
    liDaUl.innerText = item;
    
    createUl().appendChild(liDaUl);
  }
}
addLi();

function childMe () {
  let lugar = document.createElement('h3');
  lugar.innerText = 'EU TO AQUI';

  ondeEstou.appendChild(lugar);
}
childMe();

function childX3 () {
  let pFidoFi = document.createElement('p');
  pFidoFi.innerText = 'O parágrafo fi do primeiro fi do fi ta aqui :-)';

  ondeEstou.appendChild(pFidoFi);

// acessa terceiro filho a partir daqui
  console.log(pFidoFi.parentNode.nextSibling.nextSibling);
}
childX3();

let vovo = document.querySelector('main');
console.log(vovo);


// for (let fios = 0; fios < vovo.length; fios += 1) {
//   let fioRemovido = vovo[fios];
// console.log(fioRemovido);
//   if (fioRemovido != ondeEstou && fioRemovido != father && fioRemovido != primeiroFidoFi) {
//     vovo.removeChild(vovo[fios]);
//   }
// }
