import React from 'react';

class NextPokeButton extends React.Component {
  render() {
    const {
      handleNextClick,
      handlePreviousClick,
    } = this.props;

    return(
      <section id='nextBtnSection'>
                
        <button 
          id='previousPokeBtn'
          onClick={handlePreviousClick}
        >
         {'<'}
        </button>

        <button
          id='nextPokeBtn'
          onClick={handleNextClick}
        >
         {'>'}
        </button>

      </section>
    );
  }
}

export default NextPokeButton;
