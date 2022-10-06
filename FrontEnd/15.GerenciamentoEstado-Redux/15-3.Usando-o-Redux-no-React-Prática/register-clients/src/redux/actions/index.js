const REGISTER_CLIENT = 'REGISTER_CLIENT';
const REMOVE_CLIENT = 'REMOVE_CLIENT';
const ALLOW_LOGIN = 'ALLOW_LOGIN';

const registerAction = (client) => ({
  type: REGISTER_CLIENT,
  client,
});

const removeAction = (name) => ({
  type: REMOVE_CLIENT,
  name,
});

const loginAction = (login) => ({
  type: ALLOW_LOGIN,
  login,
});

export {
  REGISTER_CLIENT,
  REMOVE_CLIENT,
  ALLOW_LOGIN,
  registerAction,
  removeAction,
  loginAction,
}

