import { REGISTER_CLIENT, REMOVE_CLIENT } from "../actions";

const INITIAL_STATE = [];

const registerReducer = (state = INITIAL_STATE, action) => {
  const { type, client, name } = action;

  switch(type) {
    case REGISTER_CLIENT: return [...state, { ...client }]
    case REMOVE_CLIENT: return state.filter((client) => client.name !== name)
    default: return state;
  }
};

export default registerReducer;
