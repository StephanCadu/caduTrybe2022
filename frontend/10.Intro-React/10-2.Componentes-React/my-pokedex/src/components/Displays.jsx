import React, { Component } from 'react'

export default class Displays extends Component {
  render() {
    const { handleDisplayClick } = this.props;
    return (
      <section id='displaysSection'>
        <h2>Display Mode</h2>
        <div id='displays'>
          <div
            className='displayNumbers'
            id='9'
            onClick={handleDisplayClick}
          >
          9
          </div>
          <div
            className='displayNumbers'
            id='5'
            onClick={handleDisplayClick}
          >
          5
          </div>
          <div
            className='displayNumbers'
            id='1'
            onClick={handleDisplayClick}
          >
          1
          </div>
          <div
            className='displayNumbers'
            id='random'
            onClick={handleDisplayClick}
          >
          </div>
        </div>
      </section>
    )
  }
}
