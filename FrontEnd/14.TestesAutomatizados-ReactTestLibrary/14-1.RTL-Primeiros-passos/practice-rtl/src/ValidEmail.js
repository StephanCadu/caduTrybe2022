import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, showMessage } = props;
  const verify = verifyEmail(email);
  return (
    <div>
      <h2 data-testid="id-email-user">
        {`Valor: ${email}`}
      </h2>
      { showMessage && (
        <h3
          style={ { color: verify ? 'blue' : 'red' } }
          data-testid="validation-text"
        >{(verify ? 'Email Válido' : 'Email Inválido')}</h3>
      )}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;