import { DETAIL_ACTIONS } from './types';
import * as appActions from './appActions';
import { restaurantService } from '../aws/api';

export const updateField = (field, value) => {
  return {
    type: DETAIL_ACTIONS.UPDATE_FIELD,
    payload: { field, value }
  };
};

export const get = id => async dispatch => {
  dispatch(appActions.loading());

  try {
    const data = await restaurantService.get(id);
    dispatch({
      type: DETAIL_ACTIONS.GET_DETAILS_SUCCESS,
      payload: {
        details: data
      }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const add = details => async dispatch => {
  dispatch(appActions.loading());
  try {
    const data = await restaurantService.create(details);

    dispatch({
      type: DETAIL_ACTIONS.ADD_RESTAURANT_SUCCESS,
      payload: {
        details: data
      }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const update = details => async dispatch => {
  dispatch(appActions.loading());

  try {
    const data = await restaurantService.update(details);
    dispatch({
      type: DETAIL_ACTIONS.UPDATE_RESTAURANT_SUCCESS,
      payload: {
        details: data
      }
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};

export const remove = id => async dispatch => {
  dispatch(appActions.loading());

  try {
    await restaurantService.delete(id);
    dispatch({
      type: DETAIL_ACTIONS.UPDATE_RESTAURANT_SUCCESS
    });
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
};
