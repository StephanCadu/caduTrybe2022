// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  const jokePlace = document.querySelector('#jokeContainer');

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => jokePlace.innerHTML = joke);  
};

window.onload = () => fetchJoke();