// const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

// const allContinents = (list) => list.some(({ continent }) => continents.includes(continent));

// console.log(allContinents([
//     { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//     { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//     { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//     { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
//   ]));

let board = '';

for(let i = 0; i < 8; i += 1) {
  for(let i2 = 0; i2 < 8; i2 += 1) {
    if((i + i2) % 2 === 0) {
      board += 'X';
    } else {
      board += '| |';
    }
  }
  board += '\n';
}

console.log(board);