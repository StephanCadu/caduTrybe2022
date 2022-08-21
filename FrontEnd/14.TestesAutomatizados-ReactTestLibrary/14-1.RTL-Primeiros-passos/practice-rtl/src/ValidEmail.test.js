import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
// import userEvent from '@testing-library/user-event'

describe('testando comportamento do componente ValidEmail', () => {

  // dica do Oliva:
  // Acessar, Agir e Aferir

  // getBy true ou erro - síncrono
  // queryBy true ou null - síncrono
  // findBy true ou erro - assíncrono

  // o tempo de espera padrão das bibliotecas é de 3 segundos

  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } showMessage={ true } />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();

    // a resolução do course utiliza um ternário no className,
    // e verifica com toHaveAttribute(class, blue),
    // porém também achei esse jeito interessante
    const { style } = isValid;
    expect(style.color).toBe('blue');
  });

  it('Testando um componente, caso o email seja inválido.', () => {
    const INVALID_EMAIL = 'emailerrado';
    render(<ValidEmail email={ INVALID_EMAIL } showMessage={ true } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();

    const { style } = isValid;
    expect(style.color).toBe('red');
  });

  it('Testando um componente, caso o botão voltr tenha sido clicado', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } showMessage={ false } />);

    // nesse caso getBy retornaria um erro ao não encontrar o elemento
    // como queryBy retorna null, se torna útil nessa situação
    const isValid = screen.queryByTestId('validation-text');
    expect(isValid).not.toBeInTheDocument();
  });
})
