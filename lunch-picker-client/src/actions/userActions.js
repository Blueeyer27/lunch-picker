import * as appActions from './appActions';
import { USER_ACTIONS } from './types';
import { restaurantService } from '../aws/api';
import { getUrl } from '../aws/s3';
import { getRandom } from '../utils';

export const updateRestaurantImageSrc = (id, imageSrc) => {
  return {
    type: USER_ACTIONS.UPDATE_IMAGE_SOURCE,
    payload: {
      id,
      imageSrc
    }
  };
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
    restaurants.forEach(restaurant => {
      if (restaurant.profileImage) {
        getUrl(restaurant.profileImage).then(url => {
          dispatch(updateRestaurantImageSrc(restaurant.restaurantId, url));
        });
      }
    });
  } catch (e) {
    dispatch(appActions.showError('Oops, something wrong on here'));
  }
  dispatch(appActions.loading(false));
};

export const pick = (reset = false) => (dispatch, getState) => {
  if (reset) {
    dispatch({
      type: USER_ACTIONS.PICK_RESTAURANT,
      payload: { pickedRestaurant: null }
    });
    return;
  }
  const { restaurants } = getState().user;
  const options = restaurants.reduce((current, next) => {
    for (let i = 1; i <= next.rating; i++) {
      current.push(next);
    }
    return current;
  }, []);
  const random = getRandom(0, options.length - 1);

  const picked = options[random];
  dispatch({
    type: USER_ACTIONS.PICK_RESTAURANT,
    payload: { pickedRestaurant: picked }
  });
};
