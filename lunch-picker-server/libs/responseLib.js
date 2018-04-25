export const success = body => {
  return buildResponse(200, body);
};

export const failure = (body, statusCode = 500) => {
  return buildResponse(statusCode, body);
};

const buildResponse = (statusCode, body) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  };
};
