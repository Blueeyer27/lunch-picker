export const APP_ACTIONS = {
  TOGGLE_LOADER: 'app_actions_toggle_loader',
  SHOW_ERROR: 'app_actions_show_error',
  CLEAR: 'app_actions_clear',
  TOGGLE_DETECTED_NAME_MODAL: 'app_actions_toggle_detected_name_modal'
};

export const AUTH_ACTIONS = {
  AUTHENTICATE_USER: 'authentication_actions_authenticate_user',
  AUTHENTICATE_SUCCESS: 'authentication_actions_authenticate_success',
  SIGN_UP_SUCCESS: 'authentication_actions_sign_up_success',
  CONFIRM_SIGN_UP: 'authentication_actions_confirm_sign_up'
};

export const USER_ACTIONS = {
  GET_RESTAURANT_DETAIL: 'user_actions_get_restaurant_detail',
  LIST_RESTAURANTS: 'user_actions_list_restaurants',
  CREATE_RESTAURANT: 'user_actions_create_restaurant',
  UPDATE_RESTAURANT: 'user_actions_update_restaurant',
  DELETE_RESTAURANT: 'user_actions_delete_restaurant'
};

export const RESTAURANT_ACTIONS = {
  DETECT_SUCCESS: 'restaurant_actions_detect_success',
  SEARCH_SUCCESS: 'restaurant_actions_search_success',
  GET_DETAIL_SUCCESS: 'restaurant_actions_get_detail_success',
  GET_REVIEWS_SUCCESS: 'restaurant_actions_get_review_success'
};
