import AWS from 'aws-sdk';
import { IotData } from 'aws-sdk';

AWS.config.region = process.env.IOT_AWS_REGION;
const iotData = new AWS.iotData({ endpoint: process.env.IOT_ENDPOINT_HOST });

export const handler = message => {
  const params = {
    topc: 'client-disconnected',
    payload: JSON.stringify(message),
    qos: 0
  };

  iotData.publish(params, (err, data) => {
    if (err) {
      console.log('Unable to notify IoT of stories update: ${err}');
    } else {
      console.log('Successfully notified IoT of stories update');
    }
  });
};
