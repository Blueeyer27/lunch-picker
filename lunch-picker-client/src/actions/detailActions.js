import { DETAIL_ACTIONS } from './types';
import * as appActions from './appActions';
import { detectTextInLogo } from './restaurantActions';
import { restaurantService } from '../aws/api';
import { upload, getUrl } from '../aws/s3';

export const updateField = (field, value) => {
  return {
    type: DETAIL_ACTIONS.UPDATE_FIELD,
    payload: { field, value }
  };
};

export const uploadProfileImage = file => async dispatch => {
  dispatch(appActions.loading());

  try {
    const fileKey = await upload(file);
    dispatch(updateField('profileImage', fileKey));
    const imageUrl = await getUrl(fileKey);
    dispatch(updateField('imageUrl', imageUrl));
    dispatch(detectTextInLogo(fileKey));
  } catch (e) {
    dispatch(appActions.showError(e.message));
  }
  dispatch(appActions.loading(false));
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
    if (data.profileImage) {
      getUrl(data.profileImage).then(url => {
        dispatch(updateField('imageUrl', url));
      });
    }
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

    dispatch(appActions.showSuccess('Restaurant details has been saved.'));
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
    dispatch(appActions.showSuccess('Restaurant details has been saved.'));
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
