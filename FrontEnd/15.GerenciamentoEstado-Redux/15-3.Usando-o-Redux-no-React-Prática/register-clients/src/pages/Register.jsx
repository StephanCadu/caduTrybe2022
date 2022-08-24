import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerAction } from '../redux/actions';

const INITIAL_STATE = {
  name: '',
  age: '',
  email: '',
};

class Register extends Component {
  state = INITIAL_STATE;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSumit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(registerAction(this.state));
    this.setState({ ...INITIAL_STATE })
  }

  render() {
    const { name, age, email } = this.state;
    const { history } = this.props;

    return (
      <div className="registerContainer">
        <form onSubmit={ this.handleSumit }>
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="age"
            value={ age }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <button type="submit">Add client</button>
        </form>
        <button
          type="button"
          onClick={ () => history.push('/registered-clients') }
        >
          Registered Clients
        </button>
      </div>
    )
  }
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default connect()(Register)
