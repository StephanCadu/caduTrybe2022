import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: {
        name,
        type,
        averageWeight,
        image,
        id
      },
      favoriteClick,
    } = this.props;
    return (
      <section className='pokeContainer'>
        <div className='idPlace'>
          <div onClick={favoriteClick} className='ballUnselected'></div>
          {`#${id}`}
        </div>
        <h4 className='h4'>{name}</h4>
        <img src={image} alt={`beautiful ${name}`} className='pokeImage'></img>
        <div className='infoContainer'>
          <p className={type.toLowerCase()}>{type}</p>
          <p className='weight'>{`Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
