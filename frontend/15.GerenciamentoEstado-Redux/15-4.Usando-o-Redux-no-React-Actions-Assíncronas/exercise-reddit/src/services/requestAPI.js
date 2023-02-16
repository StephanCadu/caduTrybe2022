const BASE_URL = 'https://www.reddit.com';

const requestAPI = async (subReddit) => {
  return fetch(`${BASE_URL}/r/${subReddit}.json`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
}

export default requestAPI;
