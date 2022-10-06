import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from './store/actions';

class App extends React.Component {
  state = {
    redditSelected: '',
  }

  handleSelectChange = ({ target: { value } }) => {
    this.setState({ redditSelected: value })
    const { dispatchRequest } = this.props;
    dispatchRequest(value);
  }

  // handleRefreshClick = () => {
  //   const { redditSelected } = this.state;
  //   const { dispatch } = this.props;
  //   dispatch(fetchAPI(redditSelected));
  // }

  render() {
    const { redditSelected } = this.state;
    const { loading, posts, error, dispatchRequest } = this.props;
    const requestDate = Date.now();

    console.log(posts);

    return (
      <div className="App">
        <header>
          <h1>{ `Selected: ${redditSelected}` }</h1>
        </header>
        <select onChange={ this.handleSelectChange } name="redditSelect" id="redditSelect">
          <option name="redditOpt" value="reactjs">React JS</option>
          <option name="redditOpt" value="frontend">Front End</option>
        </select>
        <h2>{ `Last updated: ${requestDate}` }</h2>
        <button onClick={ () => dispatchRequest(redditSelected) }>Refresh</button>
        { loading ? 'Loading...' : (
          <div>
            {
              <ul>
                {
                  posts.length > 0 && posts.map((post) => (
                    <li>
                      <h2>{ post.data.title }</h2>
                    </li>
                  ))
                }
              </ul>
            }
          </div>
        ) }
      </div>
    );
  }
}

const mapStateToProps = ({
  loading,
  posts,
  error,
}) => ({
  loading,
  posts,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRequest: (subReddit) => dispatch(fetchAPI(subReddit))
})

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  error: PropTypes.string,
  dispatchRequest: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
