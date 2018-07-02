import AWS from 'aws-sdk';

export default class S3Client {
  constructor(bucket) {
    this.bucket = bucket;
    this.s3Client = new AWS.S3();
  }

  async get(fileKey) {
    const data = await this.s3Client
      .getObject({
        Bucket: this.bucket,
        Key: fileKey
      })
      .promise();
    return data.Body;
  }

  async put(buffer, fileKey, contentType) {
    await this.s3Client
      .putObject({
        Bucket: this.bucket,
        Key: fileKey,
        ContentType: contentType,
        Body: buffer
      })
      .promise();
  }
}
