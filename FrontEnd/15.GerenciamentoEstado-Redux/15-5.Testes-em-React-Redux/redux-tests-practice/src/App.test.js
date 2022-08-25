// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{ component }</Provider>),
  store,
});

describe('testing clicks', () => {
  beforeEach(cleanup);

  it('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const addButton = screen.queryByText(/Clique aqui/i);
    const clicks = screen.queryByText(/0/i);

    expect(addButton).toBeInTheDocument();
    expect(clicks).toBeInTheDocument();
  })

  it('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
    const clicks = screen.queryByText(/5/i);

    expect(clicks).toBeInTheDocument();
  });

  it('using the initial state, a click should increment the value of clicks', () => {
    renderWithRedux(<App />);
    const button = screen.queryByRole('button');

    userEvent.click(button);
    const clicks = screen.queryByText(/1/i);

    expect(clicks).toBeInTheDocument();
  })

  it('using a pre seted state, a click should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const button = screen.queryByRole('button');

    userEvent.click(button);
    const clicks = screen.queryByText(/11/i);

    expect(clicks).toBeInTheDocument();
  })
});