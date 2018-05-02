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
  CONFIRM_SIGN_UP: 'authentication_actions_confirm_sign_up',
  SIGN_OUT: 'authentication_action_sign_out'
};

export const USER_ACTIONS = {
  LIST_RESTAURANTS: 'user_actions_list_restaurants',
  UPDATE_IMAGE_SOURCE: 'user_actions_update_image_source',
  PICK_RESTAURANT: 'user_actions_pick_restaurant'
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

export const TEAM_ACTIONS = {
  GET_JOINED_TEAM_SUCCESS: 'team_actions_get_joined_team_success',
  GET_TEAM_MEMBERS_SUCCESS: 'team_actions_get_team_member_success',
  GET_MY_TEAM_SUCCESS: 'team_actions_get_my_team_success',
  GET_TEAM_DETAILS_SUCCESS: 'team_actions_get_team_details_success',
  SAVE_TEAM_SUCCESS: 'team_actions_save_team_success',
  UPDATE_TEAM_FIELD: 'team_actions_update_team_field'
};

export const ONLINE_ACTIONS = {
  USER_CONNECTED: 'online_actions_user_connected',
  MESSAGE_RECEIVED: 'online_actions_online_message_received',
  CONNECT_TO_TEAM: 'online_actions_connect_to_team',
  NOTIFY_TEAM_MEMBER: 'online_actions_notify_team_member'
};
