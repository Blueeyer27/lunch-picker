import axios from 'axios';
import mqtt from 'mqtt';
import * as Topics from './topics';

const getNotification = (userId, username) =>
  JSON.stringify({ userId, username });

const validateUserConnected = user => {
  if (!user) {
    throw new Error('User is not connected yet. Call user.connect() first!');
  }
};

const OnlineUser = (userId, username) => {
  const options = {
    clientId: userId,
    will: {
      topic: Topics.LAST_WILL_TOPIC,
      payload: getNotification(userId, username)
    }
  };

  let user = null;

  const userInstance = {
    connect: async () => {
      const response = await axios.get('/iot-presigned-url');
      user = mqtt.connect(response.data.url, options);
      user.on('connect', () => {
        console.log(`User ${username} connected`);
        user.subscribe(Topics.CONNECTED_TOPIC);
        user.subscribe(Topics.DISCONNECTED_TOPIC);
      });
    },
    disconnect: () => {
      validateUserConnected(user);
      user.publish(
        Topics.DISCONNECTED_TOPIC,
        getNotification(userId, username)
      );
      user.end();
    },
    onConnect: callback => {
      validateUserConnected(user);
      user.on('connect', callback);
    },
    onDisconnect: callback => {
      validateUserConnected(user);
      user.on('close', callback);
    },
    subscribeToTeams: teams => {
      validateUserConnected(user);
      teams.forEach(team => {
        user.subscribe(`${Topics.CONNECT_TO_TEAM}-${team.teamId}`);
        user.subscribe(`${Topics.DISCONNECT_FROM_TEAM}-${team.teamId}`);
      });
    },
    notifyTeamMembers: teams => {
      validateUserConnected(user);
      teams.forEach(team => {
        user.publish(
          `${Topics.CONNECT_TO_TEAM}-${team.teamId}`,
          JSON.stringify({ team, username })
        );
      });
    },
    onMessageReceived: callback => {
      validateUserConnected(user);
      user.on('message', (topic, message) => {
        callback(topic, JSON.parse(message));
      });
    }
  };

  return userInstance;
};

export default OnlineUser;
