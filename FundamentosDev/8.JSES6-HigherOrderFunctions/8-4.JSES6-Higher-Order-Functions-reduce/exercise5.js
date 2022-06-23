const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

/** Quantas letras a maiúsculas ou minúsculas existem no array */
const containsA = names.reduce((a, b) => a + b, '').split('').filter((letter) => letter === 'A' || letter === 'a').length;

console.log(containsA);

// ref que ajudou na resolução: https://pt.stackoverflow.com/questions/486918/como-contar-ocorr%C3%AAncias-de-uma-letra-em-uma-frase