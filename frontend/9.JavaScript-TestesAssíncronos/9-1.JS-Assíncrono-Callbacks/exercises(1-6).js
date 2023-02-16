// 1

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// // ordem: ABC
// // console.log(planetDistanceFromSun(mars)); // A
// // console.log(planetDistanceFromSun(venus)); // B
// // console.log(planetDistanceFromSun(jupiter)); // C

// // 2

// const planetDistanceFromSun2 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// // ordem: ACB
// console.log(planetDistanceFromSun2(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun2(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun2(jupiter)), 2000); // C

// 3 

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// 4

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = () => {
//   console.log(`${mars.name} temperature is: ${getMarsTemperature()} degrees Celsius`);
// }; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// setTimeout(() => sendMarsTemperature(), messageDelay());

// 5

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;


// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const sendMarsTemperature = (func, func2) => {
//   setTimeout(() => {
//     const isCuriosityFree = Math.random() >= 0.4;
//     if(isCuriosityFree) {
//       func(getMarsTemperature());
//     } else {
//       const errorMotif = 'Robot is busy'
//       func2(errorMotif);
//     }
//   }, messageDelay());
// };

// // 6

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// sendMarsTemperature(temperatureInFahrenheit, handleError); 
// sendMarsTemperature(greet, handleError); 
