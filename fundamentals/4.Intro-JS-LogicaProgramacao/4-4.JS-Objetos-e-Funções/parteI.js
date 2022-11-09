// objeto para usar nos exercícios 1 a 5:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// EXERCÍCIO 1:

console.log('Bem-vinda, ' + info['personagem']); 

// EXERCÍCIO 2:

info['recorrente'] = 'Sim';
console.log(info);

// EXERCÍCIO 3:

for (let key in info) {
    console.log(key);
}

// EXERCÍCIO 4:

for (let key in info) {
    console.log(info[key]);
}

// EXERCÍCIO 5:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for (const key in info, info2) {
   console.log(info['personagem'] +' e '+ info2['personagem']);
   console.log(info['origem'] +' e '+ info2['origem']);
   console.log(info['nota'] +' e '+ info2['nota']);
   if(info['recorrente'] === 'Sim' && info2['recorrente'] === 'Sim'){
     console.log('Ambos recorrentes');
    }
  break;  
}  

// objeto para usar nos exercícios 6 a 8:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// EXERCÍCIO 6: 

leitor['fullName'] = leitor['nome'] + ' ' + leitor['sobrenome'];

console.log('O livro favorito de ' + leitor['fullName'] + ' se chama ' + "'" + leitor['livrosFavoritos'][0]['titulo'] + "'");

// EXERCÍCIO 7:

leitor['livrosFavoritos'][1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };

console.log(leitor);

//  EXERCÍCIO 8:

console.log( leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');