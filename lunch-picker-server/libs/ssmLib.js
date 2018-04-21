import AWS from 'aws-sdk';

const ssm = new AWS.SSM();

if (typeof Promise === 'undefined') {
  AWS.config.setPromisesDependency(require('bluebird'));
}

export const getParam = async name => {
  const data = await ssm
    .getParameter({
      Name: name,
      WithDecryption: true
    })
    .promise();

  return data.Parameter.Value;
};
