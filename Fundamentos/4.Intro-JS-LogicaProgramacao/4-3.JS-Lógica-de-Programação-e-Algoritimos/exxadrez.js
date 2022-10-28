let queenRowPosi = 4;
let queenColumnPosi = 5;

let pieceRowPosi = 3;
let pieceColumnPosi = 6;

let canAttack = false;

if (queenRowPosi === pieceRowPosi || queenColumnPosi === pieceColumnPosi) {
    canAttack = true;
    console.log('ataque em linha reta');    
};

for (let iSupDir = 1; iSupDir < 8; iSupDir +=1) {
    let currentQueenRow = queenRowPosi + iSupDir;
    let currentQueenColumn = queenColumnPosi + iSupDir;
    if (queenRowPosi > 8 || queenColumnPosi > 8){
        break;
    }

    if (currentQueenRow === pieceRowPosi && currentQueenColumn === pieceColumnPosi){
        canAttack = true;
        console.log('ataque na diagonal superior direita');
    }
};

for (let iSupEsq = 1; iSupEsq < 8; iSupEsq +=1) {
    let currentQueenRow = queenRowPosi + iSupEsq;
    let currentQueenColumn = queenColumnPosi - iSupEsq;
    if (queenRowPosi > 8 || queenColumnPosi < 1){
        break;
    }

    if (currentQueenRow === pieceRowPosi && currentQueenColumn === pieceColumnPosi){
        canAttack = true;
        console.log('ataque na diagonal superior esquerda');
    }
};


for (let iInfDir = 1; iInfDir < 8; iInfDir +=1) {
    let currentQueenRow = queenRowPosi - iInfDir;
    let currentQueenColumn = queenColumnPosi + iInfDir;
    if (queenRowPosi < 1 || queenColumnPosi > 8){
        break;
    }

    if (currentQueenRow === pieceRowPosi && currentQueenColumn === pieceColumnPosi){
        canAttack = true;
        console.log('ataque na diagonal inferior direita');
    }
};

for (let iInfEsq = 1; iInfEsq < 8; iInfEsq +=1) {
    let currentQueenRow = queenRowPosi - iInfEsq;
    let currentQueenColumn = queenColumnPosi - iInfEsq;
    if (queenRowPosi < 1 || queenColumnPosi < 1){
        break;
    }

    if (currentQueenRow  === pieceRowPosi && currentQueenColumn  === pieceColumnPosi){
        canAttack = true;
        console.log('ataque na diagonal inferior esquerda');
    }
};
