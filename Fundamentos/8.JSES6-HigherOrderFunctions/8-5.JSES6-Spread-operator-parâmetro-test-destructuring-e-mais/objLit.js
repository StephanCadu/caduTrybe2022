// abbreviation object literal:

const user = (id, name, city) => ({ id, name, city });

console.log(user(777, 'Cadu', 'São Paulo'));

// pra fixar

const getPosition = (latitude, longitude) => ({ latitude, longitude });

console.log(getPosition(-19.8157, -43.9542));