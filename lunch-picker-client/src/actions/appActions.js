import { APP_ACTIONS } from './types';

export const loading = (loading = true) => {
  return {
    type: APP_ACTIONS.TOGGLE_LOADER,
    payload: { loading }
  };
};

export const showError = (error = null) => {
  return {
    type: APP_ACTIONS.SHOW_ERROR,
    payload: { error }
  };
};

export const clear = () => {
  return {
    type: APP_ACTIONS.CLEAR
  };
};
