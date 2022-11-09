// Transformando os ex do dia 4.1 em funções:

// ex1:

function operacoes (a, b) { 
    adicao = a + b;
     console.log(adicao);
    subtracao = a - b;
     console.log(subtracao);
    multiplicacao = a * b;
     console.log(multiplicacao);
    divisao = a / b;
     console.log(divisao);
    modulo = a % b; 
     console.log(modulo);    
 }
 operacoes(6, 3);
 
// ex2:

function verificaMaiorMenor(a, b) {
    if(a > b) {
        console.log('a é maior que b');
    }else{
        console.log('a é menor que b');
    }
}
verificaMaiorMenor(6, 5);

// ex3:

function qualMaior (a, b, c) {
    if(a > b && a > c) {
        console.log(a);
    }else if(a > b && a < c){
        console.log(c);
    }else if(b > a && b > c){
        console.log(b);
    }else if(b > a && b < c){
        console.log(c);
    }    
}
qualMaior(50, 20, 30);

// ex4:

function classificaNum(x) {
    if(x > 0){
        console.log('positive');
    }else if(x < 0){
        console.log('negative'); 
    }else{
        console.log('zero');
    }
}
classificaNum(0);

// ex5:

function analisaAng(ang1, ang2, ang3) {  
    if(ang1 + ang2 + ang3 == 180){
        console.log(true);
    }else if(ang1 < 0){
        console.log(false);
        console.log('ang1 é um ângulo inválido');    
    }else if(ang2 < 0){
        console.log(false);
        console.log('ang2 é um ângulo inválido');    
    }else if(ang3 < 0){
        console.log(false);
        console.log('ang3 é um ângulo inválido');    
    }else{
        console.log(false);
    }
}
analisaAng(90, 45, 45);