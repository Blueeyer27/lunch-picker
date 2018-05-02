import { ONLINE_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  user: null
};

export const onlineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONLINE_ACTIONS.USER_CONNECTED:
      return { ...state, user: action.payload.onlineUser };

    default:
      return state;
  }
};
