import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // aqui o futuro estado é analisado
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    // aqui vem um bloco de lógica que decide se o estado
    // deve ou não ser atualizado
    return true;
  }

  // aqui ocorre de fato a mudança de estado
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}