// const Redux = require('redux');

// const fazerLogin = (email) => ({
//   type: 'LOGIN',
//   email,
// });

// const INITIAL_STATE = {
//   login: false,
//   email: '',
// };

// const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         login: !state.login,
//         email: action.email,
//       };
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// store.dispatch(fazerLogin('caduzin@soueu.com'))

// console.log(store.getState());

import { combineReducers } from 'redux';
import reducerOne from './reducers/reducerOne.js';
import reducerTwo from './reducers/reducerTwo.js';

const finalReducer = combineReducers({
  one: reducerOne,
  two: reducerTwo,
})

export default finalReducer;
