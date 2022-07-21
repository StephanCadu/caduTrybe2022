import React from "react";
import SortPokemons from "./SortPokemons";
import SelectType from "./SelectType";
import SearchInput from "./SearchInput";

class Pokeform extends React.Component {
  render() {
    return (
      <form id='pokeform'>
        <SearchInput {...this.props} />
        <SelectType {...this.props} />
        <SortPokemons {...this.props} />
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
