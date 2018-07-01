import { API } from 'aws-amplify';
window.API = API;
export const userService = {
  getLoginUser: username => {
    return API.get('users', `/users/${username}`);
  },
  getAllUsers: () => {
    return API.get('users', '/users');
  }
};
