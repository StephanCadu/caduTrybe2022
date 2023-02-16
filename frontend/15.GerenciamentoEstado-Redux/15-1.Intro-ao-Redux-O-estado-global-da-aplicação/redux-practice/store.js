// ao  invés de usar createStore, é recomendado usar configureStore
// que vem do Redux Toolkit (ou RTK, ainda não aprendido).
// só é recomendado usar funções do redux 'puro' para fins didáticos!

// import { createStore } from "redux";

// para createStore não ficar depreciado, usa-se essa sintaxe:
// import { legacy_createStore as createStore} from 'redux'

// const createStore = require('./node_modules/redux');
import { legacy_createStore as createStore } from 'redux';
import finalReducer from './index.js';
// const finalReducer = require('./index.js');

const store = createStore(finalReducer);

console.log(store.getState());