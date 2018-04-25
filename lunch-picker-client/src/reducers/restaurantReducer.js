import { RESTAURANT_ACTIONS } from '../actions/types';

const INITIAL_STATE = {
  detectedResults: [],
  searchSummary: {},
  onlineDetail: {},
  onlineReviews: {}
};

const handleDetectSuccess = (state, payload) => {
  const { results } = payload;
  return { ...state, detectedResults: results };
};

const handleSearchSuccess = (state, payload) => {
  const { searchSummary } = payload;
  return { ...state, searchSummary };
};

const handleGetDetailSuccess = (state, payload) => {
  const { onlineDetail } = payload;
  return { ...state, onlineDetail };
};

const handleGetReviewSuccess = (state, payload) => {
  const { onlineReviews } = payload;
  return { ...state, onlineReviews };
};

export const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.DETECT_SUCCESS:
      return handleDetectSuccess(state, action.payload);

    case RESTAURANT_ACTIONS.SEARCH_SUCCESS:
      return handleSearchSuccess(state, action.payload);

    case RESTAURANT_ACTIONS.GET_DETAIL_SUCCESS:
      return handleGetDetailSuccess(state, action.payload);

    case RESTAURANT_ACTIONS.GET_REVIEWS_SUCCESS:
      return handleGetReviewSuccess(state, action.payload);

    case RESTAURANT_ACTIONS.RESET_RESTAURANT_INFO:
      return INITIAL_STATE;

    default:
      return state;
  }
};
