const books = require('./exCode');

// testando como achar o '.' dentro de uma string
// console.log('George R. R. Martin'.split('').filter((char) => char === '.'));

// primeira resolução que consegui
const authorWith3DotsOnName = (arr) => arr.find((obj) => obj.author.name.split('').filter((char) => char === '.').length === 3).name;

console.log(authorWith3DotsOnName(books));

// ref que ajudou na resolução acima: https://pt.stackoverflow.com/questions/486918/como-contar-ocorr%C3%AAncias-de-uma-letra-em-uma-frase#:~:text=%C3%89%20poss%C3%ADvel%20utilizar%20o%20m%C3%A9todo,String%20ou%20uma%20express%C3%A3o%20regular.

// resolução alternativa usando regex
const dotsName3 = (arr) => arr.find((obj) => /\..*\..*\./.exec(obj.author.name)).author.name

console.log(dotsName3(books));

// ref que ajudou na resolução com regex: https://regex-generator.olafneumann.org/?sampleText=%27J.%20R.%20R.%20Tolkien%27&flags=i&onlyPatterns=true&matchWholeLine=false&selection=


// Lógica desenvolvida por Caio César (github: caiocsper) para resolução com regex que encontra 3 ocorrências de letra maiúscula, ponto e expaço
/**
 **  @description Regex criados para o exercício
 **    @versao 01
 **      Expressão: /\w\x2e(?=\s)/g
 **        Explicação: \w - encontra digito(numero ou letra maiúcula ou minúscula) // \x2e - encontra ponto // \s encontra espaços vazios // x(?=y) encontra y caso y esteja logo em seguida de x
 **        Problemas: Encontra qualquer ocorrência de um digito e um ponto seguido de espaço vazio.
 **                    Não avalia desde o inicio da string, só avalia a partir da primeira ocorrência da expressão então "dasdsadaJ. R. R. Tolkien" ignora o texto antes de dasdsada
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar 3 ocorrencias desta expressão.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => ele.author.name.match(regexp).length === 3).name;
 **
 **    @Versão 02
 **      Expressão: /[A-Z][.](?=\s)/g
 **        Explicação: [A-Z] - encontra letra maiúscula // [.] - encontra ponto // \s encontra espaços vazios // x(?=y) encontra y caso y esteja logo em seguida de x
 **        Problemas: Mesmo problema da primeira versão porém agora só considera letras maiúsculas e está com uma legibilidade melhor.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar 3 ocorrencias desta expressão.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => ele.author.name.match(regexp).length === 3).name;
 **
 **    @Versão 03
 **      Expressão: /[A-Z](?=[.](?=\s))/g
 **        Explicação: [A-Z] - encontra letra maiúscula // [.] - encontra ponto // \s encontra espaços vazios // x(?=y) encontra y caso y esteja logo em seguida de x
 **        Problemas: Mesmo problema da primeira e segunda versão porém agora só considera letras maiusculas seguidas de ponto que são seguidos de espaço vazio.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar 3 ocorrencias desta expressão.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => ele.author.name.match(regexp).length === 3).name;
 **
 **    @Versão 04
 **      Expressão: /(?:[A-Z][.]\s){3}/g
 **        Explicação: () - seleciona tudo dentro de parenteses como um grupo // (?:) - define o grupo como não capturavel (isso é opcional) // 
 **                    {} - define tamanho qual de ocorrencias para a expressao do grupo que antecede os {} (definido como 3 porque o exercicio pede com 3 iniciais)
 **        Problemas: Agora só considera as 3 primeiras ocorrencias CONSECUTIVAS de UMA letra maiscula seguida por UM ponto seguido UM por espaço vazio.
 **                    Consertou: Problema de considerar outras ocorrencias da expressão fora as 3 primeiras
 **                    Consertou: Problema de considerar ocorrências não consecutivas.
 **                    Persiste: Problema de não avaliar desde o inicio da string.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar se uma string atende ao critérios da expressão e caso atenda retorne um valor booleano.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => regexp.test(ele.author.name)).name;
 **
 **    @Versão Final
 **      Expressão: /^(?:[A-Z][.]\s){3}/g
 **        Explicação: ^ - define que a expressão que segue so se aplicará a partir no inicio da string
 **        Problemas: Agora resolveu todos problemas, so encontra o padrão definido se a string começar com um grupo de três ocorrências CONSECUTIVAS de letra maiúscula seguida de ponto e espaço vazio.
 **        Aplicação: Para utilizar neste exericio necessita desenvolver uma logica para comparar se uma string atende ao critérios da expressão e caso atenda retorne um valor booleano.
 **        Exemplo de aplicação: const authorWith3DotsOnName = arr => arr.find(ele => regexp.test(ele.author.name)).name;
**
**    @consideracoes Só explicando oq observei, entendi e apliquei. Versão final funciona perfeitamente e ta o mais legível que consegui deixar
**/

const expectedResult = 'O Senhor dos Anéis';
const regexp = /^(?:[A-Z][.]\s){3}/g;

const authorWith3Dots = arr => arr.find(ele => regexp.exec(ele.author.name)).name;
console.log(authorWith3Dots(books));