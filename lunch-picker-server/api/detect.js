import { detectText } from '../libs/rekognitionLib';
import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const fileKey = event.queryStringParameters.fileKey;
  console.log('file key', fileKey);

  try {
    const data = await detectText(`private/${userId}/${fileKey}`);
    console.log('detected data', data);
    const options = data.TextDetections.reduce((results, detection) => {
      const { DetectedText, Confidence } = detection;
      if (Confidence > 80)
        if (results.every(r => r !== DetectedText)) {
          results.push(DetectedText);
        }
      return results;
    }, []);
    callback(null, success({ results: options }));
  } catch (err) {
    callback(null, failure(err));
  }
};
