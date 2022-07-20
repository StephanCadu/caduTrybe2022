import React from "react";
import SortPokemons from "./SortPokemons";

class Pokeform extends React.Component {
  render() {
    const {
      value,
      handleChange,
      input,
      handleClick,
    } = this.props;

    return (
      <form id='pokeform'>
      
        {/* Criar componente somente para o input */}
        <label htmlFor='pokeSearch'>Search pokemon:</label>
        <div id='searchDiv'>
          <input typeof='text' placeholder='Type a name or ID' id='searchInput' name='input' value={input} onChange={handleChange}></input>
        </div>

        {/* Criar componente somente para o select */}
        <label htmlFor='pokeSelect' id='selectLabel'>
          Choose Type:
        </label>
        <select value={value} onChange={handleChange} id='pokeSelect' name='value'>
          <option value='All'>All</option>
          <option value='Electric'>Electric</option>
          <option value='Fire'>Fire</option>
          <option value='Bug'>Bug</option>
          <option value='Poison'>Poison</option>
          <option value='Psychic'>Psychic</option>
          <option value='Normal'>Normal</option>
          <option value='Dragon'>Dragon</option>
        </select>

        <SortPokemons handleClick={handleClick} />
      </form>
    );
  }
}

export default Pokeform;

 // state ao invés do constructor e arrow function
  // na chamada da função fazem parte da nova sintaxe
  // da atualização do React, procurar depois:
  // state = { value: 'All', }
  // const handleChange = (event) => {}

  // handleChange({ target: { value } }) {
  //   this.setState({ value: value });
  // }
