const changeValue = async () => {
  const CURRENCY_API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';

  const myChange = await fetch(CURRENCY_API_URL)
  .then(response => response.json())
  .then(({ eur }) => eur)
  .catch(error => error.type);
  return myChange;
};

export default changeValue;