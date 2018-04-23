import axios from 'axios';
import mqtt from 'mqtt';

const LAST_WILL_TOPIC = 'last-will';
const MESSAGE_TOPIC = 'message';
const CLIENT_CONNECTED = 'client-connected';
const CLIENT_DISCONNECTED = 'client-disconnected';

const getNotification = (clientId, username) =>
  JSON.stringify({ clientId, username });

const validateClientConnected = client => {
  if (!client) {
    throw new Error(
      'Client is not connected yet. Call client.connect() first!'
    );
  }
};

export default (clientId, username) => {
  const options = {
    will: {
      topic: LAST_WILL_TOPIC,
      payload: getNotification(clientId, username)
    }
  };

  let client = null;
};
