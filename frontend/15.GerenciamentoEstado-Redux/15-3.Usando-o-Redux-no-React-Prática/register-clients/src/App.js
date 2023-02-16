import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisteredClients from './pages/RegisteredClients';

function App() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Home}
      />
      <Route
        path='/login'
        component={Login}
      />
      <Route
        path='/register'
        component={Register}
      />
      <Route
        path='/registered-clients'
        component={RegisteredClients}
      />
    </Switch>
  );
}

export default App;
