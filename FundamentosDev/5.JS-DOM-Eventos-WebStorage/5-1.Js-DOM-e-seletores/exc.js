/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

let textOne = document.getElementById('text1');

textOne.innerText = 'dev monstrao ganhando grana e vivendo bem!';
textOne.style.fontFamily = 'Macondo, cursive';
textOne.style.color = 'purple';

let textTwo = document.getElementById('text2');

textTwo.innerText = 'Suco de asselora'

let main = document.getElementsByClassName('main-content');

for (let cor of main){
  cor.style.color = 'black';
  cor.style.backgroundColor = 'rgb(76,164,109)'; 
}

let fundo1 = document.getElementsByClassName('center-content');


for (let fundo of fundo1){
    fundo.style.backgroundColor = 'white';
  }

let agaUm = document.getElementsByTagName('h1')[0];
agaUm.innerText = 'Exercício 5.1 - JavaScript';

let parag = document.getElementsByTagName('p');

for (let i = 0; i < parag.length; i += 1) { 
  parag[i].innerHTML = parag[i].innerHTML.toUpperCase();
}






