import { APP_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: null
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_ACTIONS.TOGGLE_LOADER:
      return { ...state, loading: action.payload.loading };

    case APP_ACTIONS.SHOW_ERROR:
      return { ...state, error: action.payload.error };

    case APP_ACTIONS.CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
};
