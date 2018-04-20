import * as appActions from './appActions';
import { USER_ACTIONS } from './types';
import * as s3 from '../aws/s3';
import { restaurantService } from '../aws/api';

export const getRestaurant = id => async dispatch => {
  try {
    dispatch(appActions.loading());
    const restaurant = await restaurantService.get(id);
    dispatch({
      type: USER_ACTIONS.GET_RESTAURANT_DETAIL,
      payload: {
        restaurant
      }
    });
  } catch (e) {
    dispatch(appActions.showError('Oops, something wrong on here'));
  }
  dispatch(appActions.loading(false));
};

export const listRestaurants = () => async dispatch => {
  try {
    dispatch(appActions.loading());
    const restaurants = await restaurantService.getAll();
    dispatch({
      type: USER_ACTIONS.LIST_RESTAURANTS,
      payload: {
        restaurants
      }
    });
  } catch (e) {
    dispatch(appActions.showError('Oops, something wrong on here'));
  }
  dispatch(appActions.loading(false));
};

export const createRestaurant = (restaurant, file = null) => async dispatch => {
  try {
    dispatch(appActions.loading());
    let profileImage = '';
    if (file) {
      profileImage = s3.upload(file);
    }
    restaurant.profileImage = profileImage;
    await restaurantService.create(restaurant);
    dispatch({
      type: USER_ACTIONS.CREATE_RESTAURANT
    });
  } catch (e) {
    dispatch(appActions.showError('Oops, something wrong on here'));
  }
  dispatch(appActions.loading(false));
};

export const updateRestaurant = (restaurant, file = null) => async dispatch => {
  try {
    dispatch(appActions.loading());
    let profileImage = '';
    if (file) {
      profileImage = s3.upload(file);
    }
    restaurant.profileImage = profileImage;
    await restaurantService.update(restaurant);
    dispatch({
      type: USER_ACTIONS.UPDATE_RESTAURANT
    });
  } catch (e) {
    dispatch(appActions.showError('Oops, something wrong on here'));
  }
  dispatch(appActions.loading(false));
};

export const deleteRestaurant = id => async dispatch => {
  try {
    dispatch(appActions.loading());
    await restaurantService.delete(id);
    dispatch({
      type: USER_ACTIONS.DELETE_RESTAURANT
    });
  } catch (e) {
    dispatch(appActions.showError('Oops, something wrong on here'));
  }
  dispatch(appActions.loading(false));
};
