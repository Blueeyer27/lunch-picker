import { DETAIL_ACTIONS, RESTAURANT_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  restaurantId: '',
  restaurantName: '',
  profileImage: null,
  imageUrl: null,
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

export const restaurantDetailReducer = (state = INITIAL_STATE, action) => {
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
    case RESTAURANT_ACTIONS.RESET_RESTAURANT_INFO:
      return INITIAL_STATE;

    default:
      return state;
  }
};
