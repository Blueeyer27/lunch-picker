export const getUserIdentity = event => {
  return event.requestContext.identity.cognitoIdentityId;
};
