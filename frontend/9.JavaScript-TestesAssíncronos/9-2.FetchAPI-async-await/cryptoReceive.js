const cryptoReceive = async () => {
  const CRYPTO_API_URL = 'https://api.coincap.io/v2/assets';

  const myCrypto = await fetch(CRYPTO_API_URL)
  .then(response => response.json())
  .then(({ data })=> data)
  .catch(error => error.type);
  return myCrypto;
}

export default cryptoReceive;