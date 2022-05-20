// EXERCÍCIO 1

let corpo = document.querySelector('body');

let aga1 = document.createElement('h1');
aga1.innerText = 'Exercício 5.2 - JavaScript DOM';

corpo.appendChild(aga1)

// EXERCÍCIO 2

let main = document.createElement('main');
main.className = 'main-content';

corpo.appendChild(main);

// EXERCÍCIO 3

let section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

// EXERCÍCIO 4

let p = document.createElement('p');
p.innerText = 'QUALQUER COISA'

section.appendChild(p);

// EXERCÍCIO 5

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';

main.appendChild(sectionLeft);



