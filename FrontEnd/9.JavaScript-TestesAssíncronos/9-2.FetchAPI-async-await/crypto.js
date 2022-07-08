import cryptoReceive from './cryptoReceive';

// const cryptoReceive = async () => {
//   const CRYPTO_API_URL = 'https://api.coincap.io/v2/assets';

//   const myCrypto = await fetch(CRYPTO_API_URL)
//   .then(response => response.json())
//   .then(({ data })=> data)
//   .catch(error => error.type);
//   return myCrypto;
// }

const changeValue = async () => {
  const CURRENCY_API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';

  const myChange = await fetch(CURRENCY_API_URL)
  .then(response => response.json())
  .then(({ eur }) => eur)
  .catch(error => error.type);
  return myChange;
};

const cryptoCurrency = async () => {

  // seleciona as uls que recebem as lis
  const namesList = document.getElementById('cryptoName');
  const symbolsList = document.getElementById('cryptoSymbol');
  const valuesList = document.getElementById('cryptoValue');

  // limpa as uls caso já tenham lis
  namesList.innerHTML = '';
  symbolsList.innerHTML = '';
  valuesList.innerHTML = '';

  // declara a lista com as informações das moedas
  const myReceive = await cryptoReceive();

  // cria as lis a partir da lista de moedas
  myReceive.filter((elm, ind) => ind < 10).forEach(async ({ name, symbol, priceUsd })=> {
    const nameLi = document.createElement('li');
    const symbolLi = document.createElement('li');
    const valueLi = document.createElement('li');

    nameLi.innerHTML = name;
    symbolLi.innerHTML = `(${symbol})`;
    valueLi.innerHTML = Number(priceUsd).toFixed(2);
    valueLi.className = 'value';
   
    namesList.appendChild(nameLi);
    symbolsList.appendChild(symbolLi);
    valuesList.appendChild(valueLi);
  });
   // verifica se foi recebido algo no input
  const symbolInput = document.querySelector('#symbolInput');
  if (symbolInput.value !== '') {
    const valores = document.querySelectorAll('.value');

    // declara a lista com as transações possíveis
    const myChange = await changeValue();

    const symbolValue = symbolInput.value;

    valores.forEach((valor) => {
      valor.innerHTML = (valor.innerHTML * myChange[symbolValue]).toFixed(2);
    })
    
    // sugestão do Douglas
    // debugger
  } 
}

window.onload = cryptoCurrency;

const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', cryptoCurrency);

// meu desafio aqui foi permitir que o usuário selecione a 
// moeda para qual será feita a transação do valor.
