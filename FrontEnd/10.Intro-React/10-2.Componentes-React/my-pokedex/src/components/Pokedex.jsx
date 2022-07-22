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
    } = this.props

    const myRegex = new RegExp(`${input}.*`, 'g')

    return (
      <section className='pokeSection'>

        {pokemons
          .filter((bicho) => value === 'All' ||
            bicho.type === value)
          .filter((bixin) => input === '' || 
            bixin.name.match(myRegex) || 
            bixin.id.toString().match(myRegex))
          .sort((a, b) => {
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
          })
          .filter(({ id }) => !iconClicked ||
            favorites.includes(id))
          .filter((_, ind) => ind === counter)
          .map((poke) => <Pokemon
            pokemon={poke}
            key={poke.id}
            favoritePokemon={favoritePokemon}
          />)}

      </section>
    );
  }
}

export default Pokedex;
