export const APP_ACTIONS = {
  TOGGLE_LOADER: 'app_actions_toggle_loader',
  SHOW_ERROR: 'app_actions_show_error',
  SHOW_SUCCESS: 'app_actions_show_success',
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
  LIST_RESTAURANTS: 'user_actions_list_restaurants',
  UPDATE_IMAGE_SOURCE: 'user_actions_update_image_source'
};

export const RESTAURANT_ACTIONS = {
  DETECT_SUCCESS: 'restaurant_actions_detect_success',
  SEARCH_SUCCESS: 'restaurant_actions_search_success',
  GET_DETAIL_SUCCESS: 'restaurant_actions_get_detail_success',
  GET_REVIEWS_SUCCESS: 'restaurant_actions_get_review_success',
  RESET_RESTAURANT_INFO: 'restaurant_actions_reset_restaurant_info'
};

export const DETAIL_ACTIONS = {
  UPDATE_FIELD: 'detail_actions_update_field',
  GET_DETAILS_SUCCESS: 'detail_actions_get_details_success',
  ADD_RESTAURANT_SUCCESS: 'detail_actions_add_restaurant_success',
  UPDATE_RESTAURANT_SUCCESS: 'detail_actions_update_restaurant_success',
  REMOVE_RESTAURANT_SUCCESS: 'detail_actions_remove_restaurant_success',
  LIST_RESTAURANTS_SUCCESS: 'detail_actions_list_restaurants_success'
};
