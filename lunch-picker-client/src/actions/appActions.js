import { APP_ACTIONS } from './types';
import { userService } from '../aws/api';

export const loading = (loading = true) => {
  return {
    type: APP_ACTIONS.TOGGLE_LOADER,
    payload: { loading }
  };
};

export const showError = (message = null) => {
  return { type: APP_ACTIONS.SHOW_ERROR, payload: { message } };
};

export const showSuccess = message => {
  return { type: APP_ACTIONS.SHOW_SUCCESS, payload: { message } };
};

export const clear = () => {
  return {
    type: APP_ACTIONS.CLEAR
  };
};

export const toggleDetectedNameModal = (open = true) => {
  return { type: APP_ACTIONS.TOGGLE_DETECTED_NAME_MODAL, payload: { open } };
};

export const toggleFilterPanel = (open = true) => {
  return {
    type: APP_ACTIONS.TOGGLE_FILTER_PANEL,
    payload: { open }
  };
};

export const getAllUsers = () => async dispatch => {
  const users = await userService.getAllUsers();
  dispatch({
    type: APP_ACTIONS.GET_ALL_USERS,
    payload: { users }
  });
};
