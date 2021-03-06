import { AUTH_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  username: null,
  userToken: null,
  password: null,
  authenticated: false
};

const handleAuthenticateUser = (state, payload) => {
  return {
    ...state,
    ...payload.user,
    authenticated: true
  };
};

const handleAuthenticateSuccess = (state, payload) => {
  return {
    ...state,
    username: payload.email,
    userToken: payload.userToken,
    authenticated: true
  };
};

const handleSignUpSuccess = (state, payload) => {
  return { ...state, username: payload.email, password: payload.password };
};

const handleConfirmSignUp = state => {
  return { ...state, authenticated: true, password: null };
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.AUTHENTICATE_USER:
      return handleAuthenticateUser(state, action.payload);

    case AUTH_ACTIONS.AUTHENTICATE_SUCCESS:
      return handleAuthenticateSuccess(state, action.payload);

    case AUTH_ACTIONS.SIGN_UP_SUCCESS:
      return handleSignUpSuccess(state, action.payload);

    case AUTH_ACTIONS.CONFIRM_SIGN_UP:
      return handleConfirmSignUp(state);

    case AUTH_ACTIONS.SIGN_OUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};
