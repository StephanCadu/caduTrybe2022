import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data/data';
import Pokeform from './formComponents/Pokeform';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // se multiple for selecionado, value precisa ser um array
    this.state = { 
      value: 'All', 
      input: '',
      sortValue: '',
      favorites: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.favoriteClick = this.favoriteClick.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }

  handleChange({ target: { name, value } }) {  
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ sortValue: event.target.value, })
  }

  getIndex(parent) {
    return this.state.favorites
    .indexOf(parent.innerText
    .replace(/#/g, ''));
  }

  favoriteClick({ target }) {
    if(target.className === 'ballUnselected') {

      console.log('entrou');

      target.className = 'ballSelected'

      this.setState({
        favorites: [...this.state.favorites,
          target.parentNode.innerText.replace(/#/g, '')],
      }, () => { console.log(this.state.favorites); })

    } else {

      target.className = 'ballUnselected'

      const idToRemove = target.parentNode.innerText
      .replace(/#/g, '')
      
      console.log('saiu');
      
      this.setState({
        favorites: this.state.favorites
          .filter((id) => id !== idToRemove)
      }, () => { console.log(this.state.favorites); })
    }
  }

  render() {
    const { value, input, sortValue, favorites } = this.state;
    return (
      <div className='mainDiv'>

        <section id='iconSection' className='flip'>
          <div id='iconDiv'></div>
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

        <section className='infoSection'>
        <Pokedex pokemons={pokemons}
          value={value}
          input={input}
          sortValue={sortValue}
          favoriteClick={this.favoriteClick}
          favorites={favorites}
        />
        </section>

      </div>
    );
  }
}

export default App;
