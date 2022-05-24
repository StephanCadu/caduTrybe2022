let manobras = {
    fácil: 'flip',
    média: 'ínwardflip',
    difícil: 'switch kick'
}

let local = localStorage;

local.setItem('tricks', JSON.stringify(manobras));
let trick = JSON.parse(local.getItem('tricks'));
console.log(tricl);

