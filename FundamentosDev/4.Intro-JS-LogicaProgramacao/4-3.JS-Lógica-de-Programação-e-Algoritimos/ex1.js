// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

// let num = 6;
// let fatorial = num;



function fatora(fatorial){
    if (fatorial === 0 || fatorial === 1){
        console.log(1);
    }else if (isNaN(fatorial)){
        console.log('Não existe fatorial de textos');
    }else if (!Number.isInteger(fatorial) || fatorial < 0) {
        console.log('Não existe fatorial de um número não natural');
    }else{
        let multiplicador = fatorial - 1;
        for (let i = multiplicador; i > 0; i -= 1) {
            fatorial *= i;  
        }
    }
    return fatorial
}
console.log(fatora(4));


