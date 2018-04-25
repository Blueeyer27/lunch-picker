const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, ({ code, message }) => {
      console.log('get position fail,', message);
      reject(
        Object.assign(new Error(message), { name: 'PositionError', code })
      );
    });
  });
};

export const getCurrentPosition = async () => {
  const position = await getCurrentLocation();
  console.log(position);
  const { latitude, longitude } = position.coords;

  return { latitude, longitude };
};
