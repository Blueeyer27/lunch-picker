import * as appActions from './appActions';
import { USER_ACTIONS } from './types';
import { restaurantService } from '../aws/api';

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
