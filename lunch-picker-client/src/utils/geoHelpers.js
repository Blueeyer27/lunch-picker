const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, ({ code, message }) => {
      reject(
        Object.assign(new Error(message), { name: 'PositionError', code })
      );
    });
  });
};

export const getCurrentPosition = async () => {
  const position = await getCurrentLocation();
  const { latitude, longitude } = position.coords;

  return { latitude, longitude };
};
