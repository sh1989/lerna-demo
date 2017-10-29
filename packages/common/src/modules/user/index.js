import { createAction } from 'redux-actions';

const REQUEST_LOGIN = 'user/request-login';
const LOGIN = 'user/login';
const LOGIN_FAILED = 'user/login-failed';

export const requestLogin = createAction(REQUEST_LOGIN);
export const login = createAction(LOGIN);
export const loginFailed = createAction(LOGIN_FAILED);

export const getUsername = state => state.user.name;

const defaultState = {
  loading: false,
  name: null,
  error: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, loading: true };
    case LOGIN:
      return { ...state, loading: false, name: action.payload };
    case LOGIN_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
