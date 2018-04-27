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
  console.log('All detected results', data);
  const options = data.TextDetections.reduce((results, detection) => {
    const { DetectedText, Confidence } = detection;
    if (Confidence > 80)
      if (results.every(r => r !== DetectedText)) {
        results.push(DetectedText);
      }
    return results;
  }, []);
  return options;
};
