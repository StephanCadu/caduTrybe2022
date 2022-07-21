import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {

    const { 
      pokemons,
      value,
      input,
      sortValue,
      favoriteClick,
      favorites,
    } = this.props

    const myRegex = new RegExp(`${input}.*`, 'g')

    return (
      <section className='pokeSection'>
        {pokemons.filter((bicho) => value === 'All' || bicho.type === value)
          .filter((bixin) => input === '' || bixin.name.match(myRegex) || bixin.id.toString().match(myRegex))
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
          .map((poke) => <Pokemon
            pokemon={poke}
            key={poke.id}
            favoriteClick={favoriteClick}
          />)}

          {/* .filter((pkm) => favorites.length < 1 ||favorites.includes(pkm.id)) */}

      </section>
    );
  }
}

export default Pokedex;
