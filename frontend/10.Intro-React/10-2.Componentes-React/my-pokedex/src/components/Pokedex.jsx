import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {

    const {
      pokemons,
      value,
      input,
      sortValue,
      favoritePokemon,
      iconClicked,
      favorites,
      counter,
      display,
    } = this.props

    // filtra primeiro por tipo
    const filteredTypes = pokemons
      .filter((pokemon) => value === 'All'
      || pokemon.type === value);

    // pelo input
    const myRegex = new RegExp(`${input}.*`, 'i')

    const filteredInput = filteredTypes.filter((pokemon) => input === ''
      || pokemon.name.match(myRegex)
      || pokemon.id.toString().match(myRegex));

    // pelos favoritos
    const filteredFavorites = filteredInput.filter(({ id }) =>         !iconClicked || favorites.includes(id));

    // organiza da forma escolhida
    const sortedPokemons = filteredFavorites.sort((a, b) => {
      switch (sortValue) {
        case 'idUp':
          return a.id - b.id;
        case 'idDown':
          return b.id - a.id;
        case 'nameUp':
          return a.name.localeCompare(b.name);
        case 'nameDown':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const fourRandoms = [random(0, 9), random(0, 9), random(0, 9), random(0, 9)];

    // define quantos serão mostrados
    let displayPokemons;

    if(display === '1') {
      displayPokemons = sortedPokemons.filter((_, ind) =>
        ind === counter);
    } else if (display === 'random') {
      displayPokemons = sortedPokemons.filter((_, ind) =>
        fourRandoms.includes(ind));
    } else {
      displayPokemons = sortedPokemons.filter((_, ind) =>
        ind < display);
    }


    return (
      <section className='pokeSection'>

        {displayPokemons.map((poke) => <Pokemon
            pokemon={poke}
            key={poke.id}
            favoritePokemon={favoritePokemon}
            favorites={favorites}
          />)}

      </section>
    );
  }
}

export default Pokedex;
