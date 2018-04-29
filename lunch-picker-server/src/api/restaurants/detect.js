import { detectText } from '../../libs/rekognitionLib';
import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const fileKey = `private/${userId}/${event.queryStringParameters.fileKey}`;
  console.log('file key', fileKey);

  try {
    const data = await detectText(`private/${userId}/${fileKey}`);
    console.log('detected data', data);
    callback(null, success({ results: data }));
  } catch (err) {
    callback(null, failure(err));
  }
};
