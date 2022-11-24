import Pizza from "./three";

type Common = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Sweet = 'Nutela' | 'Goiabada' | 'Marshmallow';

interface CommonPizza extends Pizza {
  flavor: Common;
}

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian;
}

interface SweetPizza extends Pizza {
  flavor: Sweet;
  slices: 4;
}

const commonPizza: CommonPizza = { flavor: 'Frango', slices: 8 };
const vegetarianPizza: VegetarianPizza = { flavor: 'Cogumelo', slices: 8 };
const sweetPizza: SweetPizza = { flavor: 'Goiabada', slices: 4 };

console.log(commonPizza, vegetarianPizza, sweetPizza);

