import { APP_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  success: null,
  isDetectedNameModalOpen: false,
  users: []
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_ACTIONS.TOGGLE_LOADER:
      return { ...state, loading: action.payload.loading };

    case APP_ACTIONS.SHOW_ERROR:
      return { ...state, error: action.payload.message };

    case APP_ACTIONS.SHOW_SUCCESS:
      return { ...state, success: action.payload.message };

    case APP_ACTIONS.TOGGLE_DETECTED_NAME_MODAL:
      return { ...state, isDetectedNameModalOpen: action.payload.open };

    case APP_ACTIONS.GET_ALL_USERS:
      return { ...state, users: action.payload.users };

    case APP_ACTIONS.CLEAR:
      return { ...INITIAL_STATE, users: state.users };

    default:
      return state;
  }
};
