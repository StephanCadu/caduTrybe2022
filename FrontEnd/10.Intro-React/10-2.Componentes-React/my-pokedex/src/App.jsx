import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';
import Pokeform from './FormComponents/Pokeform';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // se multiple for selecionado, value precisa ser um array
    this.state = { 
      value: 'All', 
      input: '',
      sortValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const { value, input, sortValue } = this.state;
    return (
      <div className='mainDiv'>

        <section id='iconSection' className='flip'>
          <div id='iconDiv'></div>
          {/* <div id='iconBack'>Show favorite pokemons!</div> */}
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
          sortValue={sortValue} />
        </section>

      </div>
    );
  }
}

export default App;
