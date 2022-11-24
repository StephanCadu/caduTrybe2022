import Car from './one';

const car = new Car('VolksWagen Gol', 'Prata', 4);

// getting passenger
car.turnOn();
car.speedUp();
console.log('600 meters');
car.speedDown();
car.turn('Left');
car.turn('Left');
car.speedUp();
console.log('200 meters');
car.speedDown();
car.turn('Right');
car.speedUp();
console.log('1.5 kilometers');
car.speedDown();
car.turn('Right');
console.log('400 meters');
car.speedDown();
car.stop();
car.turnOff();
car.honk();

// travel
car.turnOn();
car.speedUp();
console.log('300 meters');
car.speedDown();
car.turn('Right');
car.speedUp();
console.log('2.2 kilometers');
car.speedDown();
car.turn('Left');
car.speedUp();
console.log('400 meters');
car.speedDown();
car.turn('Right');
car.speedUp();
console.log('100 meters');
car.speedDown();
car.stop();
car.turnOff();
