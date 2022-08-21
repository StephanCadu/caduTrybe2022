import React from "react";

class SelectType extends React.Component {
  render() {

    const { value, handleChange } = this.props;

    return (
    <section id='selectSection'>

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

    </section>
    );
  }
}

export default SelectType;
