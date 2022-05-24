let custoProduto = 120;
let valorVenda = 450;
let impostoProduto = (custoProduto * 20) / 100;
let custoTotal = custoProduto + impostoProduto;
let lucro = valorVenda - custoTotal;

if(custoProduto < 0 || valorVenda < 0){
    console.log('erro');
}else{
    console.log(lucro);
}