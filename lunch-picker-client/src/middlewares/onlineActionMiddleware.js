export const onlineActionMiddleware = store => next => action => {
  const { payload } = action;
  if (payload && payload.online) {
    const { topic, message } = payload;
    console.log('In middleware', topic, message);
  }
  return next(action);
};
