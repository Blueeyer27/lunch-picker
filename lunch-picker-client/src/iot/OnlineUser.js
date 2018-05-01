import axios from 'axios';
import mqtt from 'mqtt';
import uuid from 'uuid';

const LAST_WILL_TOPIC = 'last-will';
const CONNECTED_TOPIC = 'user-connected';
const DISCONNECTED_TOPIC = 'user-disconnected';

const getNotification = (userId, username) =>
  JSON.stringify({ userId, username });

const OnlineUser = (userId, username) => {
  const options = {
    will: {
      topic: LAST_WILL_TOPIC,
      payload: getNotification(userId, username)
    }
  };

  let connectedUser = null;

  const user = {};

  user.connect = async () => {
    const response = await axios.get('/iot-presigned-url');
    connectedUser = mqtt.connect(response.data.url, options);
  };
};

export default OnlineUser;
