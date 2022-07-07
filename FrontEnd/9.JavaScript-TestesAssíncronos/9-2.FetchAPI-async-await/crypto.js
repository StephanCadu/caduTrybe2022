const API_URL = 'https://api.coincap.io/v2/assets';

const cryptoCurrency = () => {
  const myList = document.getElementById('cryptoList');

  fetch(API_URL)
  .then(response => response.json())
  .then(({ data })=> {
    data.filter((e, ind) => ind < 10).forEach(({ name, symbol, priceUsd })=> {
      const myLi = document.createElement('li');
      myLi.innerHTML = `${name} (${symbol}): ${parseInt(priceUsd).toFixed(2)}`
      myList.appendChild(myLi);
    });
  });
}

window.onload = () => cryptoCurrency();