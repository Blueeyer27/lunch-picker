import { detectText } from '../../libs/rekognitionLib';
import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const fileKey = `private/${process.env.REGION}:${userId}/${
    event.queryStringParameters.fileKey
  }`;

  try {
    const data = await detectText(fileKey);
    callback(null, success({ results: data }));
  } catch (err) {
    callback(null, failure(err));
  }
};
