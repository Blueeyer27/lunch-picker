import { Auth } from 'aws-amplify';
import * as appActions from './appActions';
import { AUTH_ACTIONS } from './types';

export const login = (email, password) => async dispatch => {
  try {
    dispatch(appActions.loading());
    await Auth.signIn(email, password);
    dispatch({
      type: AUTH_ACTIONS.AUTHENTICATE_SUCCESS,
      payload: {
        email
      }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const signUp = (email, password) => async dispatch => {
  try {
    dispatch(appActions.loading());
    await Auth.signUp({
      username: email,
      password
    });
    dispatch({
      type: AUTH_ACTIONS.SIGN_UP_SUCCESS,
      payload: {
        email,
        password
      }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const confirmSignUp = confirmCode => async (dispatch, getState) => {
  const { username, password } = getState().auth;

  try {
    dispatch(appActions.loading());
    await Auth.confirmSignUp(username, confirmCode);
    await Auth.signIn(username, password);
    dispatch({ type: AUTH_ACTIONS.CONFIRM_SIGN_UP });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};
