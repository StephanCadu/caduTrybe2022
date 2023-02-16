interface Car {
  brand: string,
  color: string,
  doors: number,
  honk(): void,
  turnOn(): void,
  turnOff(): void,
  speedUp(): void,
  speedDown(): void,
  stop(): void,
  turn(direction: string): void,
}

class Car {
  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('BI BIIIIIII');
  }

  turnOn(): void {
    console.log('Car turned on');
  }

  turnOff(): void {
    console.log('Car turned off');
  }

  speedUp(): void {
    console.log('Car speed up');
  }

  speedDown(): void {
    console.log('Car speed down');
  }

  stop(): void {
    console.log('Car stops');
  }

  turn(direction: string) {
    console.log(`Car turns ${direction}`);
  }
}

export default Car;