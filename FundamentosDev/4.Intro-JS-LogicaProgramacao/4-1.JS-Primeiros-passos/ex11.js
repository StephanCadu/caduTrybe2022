let salarioBruto = 3000;
let inss;


    if(salarioBruto <= 1556.94){
        inss = salarioBruto * 0.08;
    }else if(salarioBruto <= 2594.92){
        inss = salarioBruto * 0.09;
    }else if(salarioBruto <= 5189.82){
        inss = salarioBruto * 0.11;
    }else{
        inss = 570.88;
    }

    let calculoINSS = salarioBruto - inss;
    let IR;
    
    if(calculoINSS <= 1903.98){
        IR = 0;
    }else if(calculoINSS <= 2826.65){
        IR = (calculoINSS * 0.075) - 142.80;
    }else if(calculoINSS  <= 3751.05){
        IR = (calculoINSS * 0.15) - 354.80;
    }else if(calculoINSS <= 4664.68){
        IR = (calculoINSS * 0.225) - 636.13;
    }else{
        IR = (calculoINSS * 0.275) - 869.36;
    }
    
    let salarioLiquido = calculoINSS - IR;

    console.log(salarioLiquido);

  
    
