import { Auth } from 'aws-amplify';
import * as appActions from './appActions';
import * as onlineActions from './onlineAction';
import { AUTH_ACTIONS } from './types';
import { userService } from '../aws/api';

export const authenticateUser = username => async dispatch => {
  const user = await userService.getLoginUser(username);
  dispatch({
    type: AUTH_ACTIONS.AUTHENTICATE_USER,
    payload: { user }
  });
  dispatch(onlineActions.connect(user));
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch(appActions.loading());
    const response = await Auth.signIn(email, password);
    dispatch(authenticateUser(response.username));
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

export const signOut = () => async dispatch => {
  await Auth.signOut();
  dispatch({ type: AUTH_ACTIONS.SIGN_OUT });
};
