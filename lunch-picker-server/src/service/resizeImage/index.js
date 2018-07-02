import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import logger from '../../libs/logLib';
import Sharp from 'sharp';
import S3Client from '../../libs/s3Lib';

export const handler = async (event, context, callback) => {
  try {
    const { s3 } = event.Records[0];
    const { bucket, object } = s3;
    const fileKey = object.key;
    const bucketName = bucket.name;

    const s3Client = new S3Client(bucketName);

    const data = await s3Client.get(fileKey);

    const buffer = await Sharp(data)
      .resize(100, 100)
      .toFormat('png')
      .toBuffer();

    const fileparts = fileKey.split('/');
    fileparts.splice(2, 0, 'thumbnails');
    await s3Client.put(buffer, fileparts.join('/'), 'image/png');
    callback(null, success());
  } catch (error) {
    logger.error(error.message, null, error);
    callback(null, failure({ status: false, error }));
  }
};
