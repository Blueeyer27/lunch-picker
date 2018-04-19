import { AUTHENTICATION_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  username: null,
  password: null,
  authenticated: false
};

const handleAuthenticateSuccess = (state, payload) => {
  return { ...state, username: payload.email, authenticated: true };
};

const handleSignUpSuccess = (state, payload) => {
  return { ...state, username: payload.email, password: payload.password };
};

const handleConfirmSignUp = state => {
  return { ...state, authenticated: true, password: null };
};

export const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATION_ACTIONS.AUTHENTICATE_SUCCESS:
      return this.handleAuthenticateSuccess(state, action.payload);

    case AUTHENTICATION_ACTIONS.SIGN_UP_SUCCESS:
      return this.handleSignUpSuccess(state, action.payload);

    case AUTHENTICATION_ACTIONS.CONFIRM_SIGN_UP:
      return this.handleConfirmSignUp(state);

    default:
      return state;
  }
};
