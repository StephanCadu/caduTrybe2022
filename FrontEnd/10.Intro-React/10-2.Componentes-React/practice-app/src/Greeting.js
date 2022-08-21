import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

// Para componentes reutilizáveis funcionarem corretamente,
// geralmente se faz a checagem de tipos para confirmar que
// o dado recebido é do mesmo tipo que o esperado.
// 
// No caso abaixo é definido que as propriedades name e lastName
// só podem receber strings, caso contrário aparecerá um aviso no console.
// 
// Ao adicionar .isRequired tornamos uma propriedade obrigatória,
// caso ela não seja fornecida um aviso também será disparado.
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

// Também é possível adicionar porps como default:
Greeting.defaultProps = {
  name: 'Irineu',
  lastName: 'Você não sabe nem eu',
}

export default Greeting;

// PRINCIPAIS VALIDADORES DE PORPS:
Greeting.propTypes = {
  // Todos os validadores aqui são, por padrão, validadores opcionais.
  // Para torná-los obrigatórios basta adicionar .isRequired
  numeroObrigatório: PropTypes.number.isRequired,

  // Tipos básico do JS.
  stringOpcional: PropTypes.string,
  numeroOpcional: PropTypes.number,
  booleanoOpcional: PropTypes.bool,
  funcaoOpcional: PropTypes.func,
  objetoOpcional: PropTypes.object,
  arrayOpcional: PropTypes.array,

  // Um array de determinado tipo básico
  arrayDe: PropTypes.arrayOf(PropTypes.number),

  // Um objeto de determinado tipo básico
  objetoDe: PropTypes.objectOf(PropTypes.number),

  // Um objeto com forma específica
  objetoComForma: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // Um objeto que não permite props extras
  objetoComFormatoRigoroso: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
    avaibility: PropTypes.bool,
  }),
};