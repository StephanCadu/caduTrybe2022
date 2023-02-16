import React from "react";

class SortPokemons extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <section id='sortContainer'>

        <label id='sortLabel'>Sort by:</label>

        <button value='idUp'
        id='idUp'
        className='sortBtn'
        onClick={handleClick}>ID up</button>

        <button value='idDown'
        id='idDown'
        className='sortBtn'
        onClick={handleClick}>ID down</button>

        <button value='nameUp'
        id='nameUp'
        className='sortBtn'
        onClick={handleClick}>Name up</button>

        <button value='nameDown'
        id='nameDown'
        className='sortBtn'
        onClick={handleClick}>Name down</button>
        
      </section>
    );
  }
}

export default SortPokemons;
