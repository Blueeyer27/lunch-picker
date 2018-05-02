import { API } from 'aws-amplify';

export const userService = {
  getLoginUser: username => {
    return API.get('users', `/users/${username}`);
  }
};
