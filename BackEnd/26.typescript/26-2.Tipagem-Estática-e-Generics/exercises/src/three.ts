type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string | Array<string>;
  slices: Slices;
}

class Pizza {
  constructor(flavor: string | Array<string>, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const pizza1 = new Pizza('Calabresa', 8);
const pizza2 = new Pizza(['Marguerita', 'Palmito'], 6);
const pizza3 = new Pizza('Nutela', 4);