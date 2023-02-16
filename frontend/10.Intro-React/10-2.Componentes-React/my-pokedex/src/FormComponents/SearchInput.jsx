import React from "react";

class SearchInput extends React.Component {
  render() {
    return(
      <section id='searchSection'>
        <label htmlFor='pokeSearch'>Search pokemon:</label>
        <div id='searchDiv'>
          <input
            typeof='text'
            placeholder='Type a name or ID'
            id='searchInput'
            name='input'
            value={this.props.input}
            onChange={this.props.handleChange}>
          </input>
        </div>
      </section>
    );
  }
}

export default SearchInput;
