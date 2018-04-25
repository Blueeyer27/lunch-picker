import { detectText } from '../libs/rekognitionLib';
import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const fileKey = `private/${userId}/${event.queryStringParameters.fileKey}`;

  console.log('file key', fileKey);

  try {
    const data = await detectText(fileKey);
    console.log('detected data', data);
    const options = data.TextDetections.reduce((results, detection) => {
      const text = detection.DetectedText;
      if (results.every(r => r !== text)) {
        results.push(text);
      }
      return results;
    }, []);
    callback(null, success({ results: options }));
  } catch (err) {
    callback(null, failure(err));
  }
};
