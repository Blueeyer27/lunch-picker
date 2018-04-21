import { detectText } from '../libs/rekognitionLib';
import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);

  try {
    const data = await detectText('demo/logo-grilld.png');
    const options = data.TextDetections.reduce((results, detection) => {
      const text = detection.DetectedText;
      if (results.every(r => r !== text)) {
        results.push(text);
      }
      return results;
    }, []);
    callback(null, success(options));
  } catch (err) {
    return callback(null, failure(err));
  }
};
