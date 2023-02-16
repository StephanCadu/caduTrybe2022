import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAction } from '../redux/actions';

class RegisteredClients extends Component {
  state = { sortClicked: false };

  handleClick = () => {
    const { history } = this.props
    history.push('/register')
  }

  handleSortClick = () => this.setState((prev) => ({
    sortClicked: !prev.sortClicked,
  }))

  render() {
    const { isLogged, clients, dispatch } = this.props;
    const { sortClicked } = this.state;

    return (
      <div>
        { !isLogged ? <h1>Login não efetuado</h1> : (
          <div className="clientsContainer">
            <header>
              <h1>Registered Clients</h1>
            </header>
            <button
              type="button"
              onClick={ this.handleSortClick }
            >
              Sort Clients
            </button>
            { clients.length === 0 ? <h1>No clients registered yet</h1> : (
              <ul>
                { clients
                  .sort((a, b) => !sortClicked || a.name.localeCompare(b.name))
                  .map(({ name, age, email }, ind) => (
                  <li key={ ind }>
                    <h2>Name: { name }</h2>
                    <h2>Age: { age }</h2>
                    <h2>Email: { email }</h2>
                    <button
                      onClick={ () => dispatch(removeAction(name)) }
                    >
                      X
                    </button>
                  </li>
                )) }
              </ul>
            )}
            <button
              type="button"
              onClick={ this.handleClick }
            >
              Register Page
            </button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.loginReducer.isLogged,
  clients: state.registerReducer,
});

RegisteredClients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  isLogged: PropTypes.bool.isRequired,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
}

export default connect(mapStateToProps)(RegisteredClients);
