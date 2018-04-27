import { DETAIL_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  restaurantId: '',
  restaurantName: '',
  profileImage: null,
  externalId: null,
  rating: null
};

const handleFieldUpdate = (state, payload) => {
  const { field, value } = payload;
  return { ...state, [field]: value };
};

const handleStateUpdateSuccess = (state, payload) => {
  const { details } = payload;
  return { ...state, ...details };
};

export const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAIL_ACTIONS.UPDATE_FIELD:
      return handleFieldUpdate(state, action.payload);

    case DETAIL_ACTIONS.GET_DETAILS_SUCCESS:
      return handleStateUpdateSuccess(state, action.payload);

    case DETAIL_ACTIONS.ADD_RESTAURANT_SUCCESS:
      return handleStateUpdateSuccess(state, action.payload);

    case DETAIL_ACTIONS.UPDATE_RESTAURANT_SUCCESS:
      return handleStateUpdateSuccess(state, action.payload);

    case DETAIL_ACTIONS.REMOVE_RESTAURANT_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};
