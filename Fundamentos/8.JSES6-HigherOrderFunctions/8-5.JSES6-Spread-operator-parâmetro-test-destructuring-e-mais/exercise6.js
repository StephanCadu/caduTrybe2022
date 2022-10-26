const palio = ['Palio', 'Fiat', 2019, 'Comum'];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963, 'Relíquia'];
const chiron = ['Chiron', 'Bugatti', 2016, 'Luxo'];

// transforme cada array em um objeto

const toObject = ([carro, marca, ano, categoria]) => ({ carro, marca, ano, categoria });

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));
