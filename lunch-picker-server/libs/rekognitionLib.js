import AWS from 'aws-sdk';
import { AWS_CONFIG } from '../config';
const rekognition = new AWS.Rekognition();

if (typeof Promise === 'undefined') {
  AWS.config.setPromisesDependency(require('bluebird'));
}

export const detectText = async fileKey => {
  const data = await rekognition
    .detectText({
      Image: {
        S3Object: {
          Bucket: AWS_CONFIG.bucket,
          Name: fileKey
        }
      }
    })
    .promise();

  return data;
};
