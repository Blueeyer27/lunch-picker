import { ONLINE_ACTIONS } from './types';
import OnlineUser from '../iot/OnlineUser';
import { teamService } from '../aws/api';

export const connect = user => async dispatch => {
  const onlineUser = new OnlineUser(user.userToken, user.username);
  await onlineUser.connect();
  window.onlineUser = onlineUser;
  onlineUser.onMessageReceived((topic, message) => {
    dispatch({
      type: ONLINE_ACTIONS.MESSAGE_RECEIVED,
      payload: {
        topic,
        message,
        online: true
      }
    });
  });
  dispatch({
    type: ONLINE_ACTIONS.USER_CONNECTED,
    payload: { onlineUser }
  });

  const teams = await teamService.getJoinedTeams();
  onlineUser.subscribeToTeams(teams);
  onlineUser.notifyTeamMembers(teams);
};
