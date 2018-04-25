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

  const subscriber = {};

  subscriber.connect = async () => {
    const response = await axios.get('/iot-presigned-url');
    client = mqtt.connect(response.data.url, options);
    client.on('connect', () => {
      console.log('Connected to AWS IoT Broker');
      client.subscribe(MESSAGE_TOPIC);
      client.subscribe(CLIENT_CONNECTED);
      client.subscribe(CLIENT_DISCONNECTED);
      const connectNotification = getNotification(clientId, username);

      client.publish(CLIENT_CONNECTED, connectNotification);
      console.log(`Sent message: ${CLIENT_CONNECTED} = ${connectNotification}`);
    });

    client.on('close', () => {
      console.log('Connection to AWS IoT Broker closed');
      client.end();
    });
  };

  subscriber.onConnect = callback => {
    validateClientConnected(client);
    console.log('Client On Connect');
    client.on('connect', callback);
    return subscriber;
  };

  subscriber.onDisconnect = callback => {
    validateClientConnected('client');
    console.log('Client On Disconnect');
    client.on('close', callback);
    return subscriber;
  };

  subscriber.onMessageReceived = callback => {
    validateClientConnected(client);
    client.on('message', (topic, message) => {
      console.log(`Received message: ${topic} - ${message}`);
      callback(topic, JSON.parse(message.toString('utf8')));
    });
    return subscriber;
  };

  subscriber.sendMessage = message => {
    validateClientConnected(client);
    client.publish(MESSAGE_TOPIC, JSON.stringify(message));
    console.log(`Sent message: ${MESSAGE_TOPIC} - ${JSON.stringify(message)}`);
    return subscriber;
  };

  return subscriber;
};
