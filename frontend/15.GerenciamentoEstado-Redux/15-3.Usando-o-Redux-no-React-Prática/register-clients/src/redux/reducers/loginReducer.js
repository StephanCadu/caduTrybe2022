import { ALLOW_LOGIN } from "../actions";

const INITIAL_STATE = {
  email: '',
  password: '',
  isLogged: false
}

const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, login } = action;
  switch(type) {
    case ALLOW_LOGIN: return {
      ...login,
      isLogged: login.email !== '',
    }
    default: return state;
  }
};

export default loginReducer;
