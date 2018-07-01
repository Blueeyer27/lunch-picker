export const getUserIdentity = event => {
  if (process.env.IS_OFFLINE) {
    return 'ap-southeast-2:0c8c7039-35ea-46d0-bbbf-4de52f432834';
  }

  const identityId = event.requestContext.identity.cognitoIdentityId;
  const indexOfColon = identityId.indexOf(':');
  return identityId.substr(indexOfColon + 1);
};
