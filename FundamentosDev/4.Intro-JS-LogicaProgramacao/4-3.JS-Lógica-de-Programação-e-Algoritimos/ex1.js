// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

let num = 'bc';
let fatorial = num;
let multiplicador = fatorial - 1;

for (let i = multiplicador; i > 0; i -= 1) {
    fatorial *= i;
}
if (fatorial === 0 || fatorial === 1){
    console.log(1);
}else if (fatorial = NaN){
    console.log('não existe fatorial de textos');
}


console.log(fatorial);