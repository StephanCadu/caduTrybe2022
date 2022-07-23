import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data/data';
import Pokeform from './FormComponents/Pokeform';
import React from 'react';
import NextPokeButton from './components/NextPokeButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    // se multiple for selecionado, value precisa ser um array
    this.state = { 
      value: 'All', 
      input: '',
      sortValue: '',
      favorites: [],
      iconClicked: false,
      counter: 0,
    };
  }

  handleChange = ({ target: { name, value } }) => {  
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ sortValue: event.target.value, })
  }

  favoritePokemon = (e, id) => {
    const { favorites } = this.state;

    if(favorites.includes(id)) {
      e.target.classList.toggle('ballSelected');
      e.target.classList.toggle('ballUnselected');
      this.setState({
        favorites: favorites.filter((pokeId) => pokeId !== id)
      });
    } else {
      e.target.classList.toggle('ballUnselected');
      e.target.classList.toggle('ballSelected');
      this.setState({
        favorites: [...favorites, id]
      });
    }
  }

  handleIconClick = () => {
    this.setState({
      iconClicked: !this.state.iconClicked
    })
  }

  handleNextClick = () => {
    const {
      counter,
      value,
      iconClicked,
      favorites,
    } = this.state;

    let filterLenght;
    
    if(iconClicked) {
      filterLenght = favorites.length;
    } else {
      filterLenght = pokemons.filter(({ type }) =>
      value === 'All' ||
      type === value).length
    }
    
    this.setState({
      counter: (counter < filterLenght - 1 ?
        this.state.counter + 1 : 0 )
    })
  }

  handlePreviousClick = () => {
    const {
      counter,
      value,
      iconClicked,
      favorites,
    } = this.state;

    let filterLenght;
    
    if(iconClicked) {
      filterLenght = favorites.length;
    } else {
      filterLenght = pokemons.filter(({ type }) =>
      value === 'All' ||
      type === value).length
    }

    this.setState({
      counter: (counter > 0 ?
        this.state.counter - 1 : (filterLenght - 1))
    })
  }

  render() {
    const {
      value,
      input, 
      sortValue,
      favorites,
      iconClicked,
      counter,
    } = this.state;
    return (
      <div className='mainDiv'>

        <section id='iconSection' className='flip'>
          <div id='iconDiv' onClick={this.handleIconClick}></div>
          <span id='hoverSpan'>Show favorite pokemons!</span>
        </section>

        <section className='formContainer'>
          <Pokeform value={value}
            input={input} 
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            sortValue={sortValue}
          />
        </section>

        <div className='title'></div>

        <NextPokeButton
          handleNextClick={this.handleNextClick}
          handlePreviousClick={this.handlePreviousClick}
        />

        <section className='infoSection'>
        <Pokedex pokemons={pokemons}
          value={value}
          input={input}
          sortValue={sortValue}
          favoritePokemon={this.favoritePokemon}
          favorites={favorites}
          iconClicked={iconClicked}
          counter={counter}
        />
        </section>

      </div>
    );
  }
}

export default App;
