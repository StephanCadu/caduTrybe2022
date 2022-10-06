import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, dispatchLogin } = this.props;
    // const login = { ...this.state, isLogged: true };
    dispatchLogin(this.state);
    history.push('/registered-clients');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button type="submit">Login</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (login) => dispatch(loginAction(login)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchLogin: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Login);
