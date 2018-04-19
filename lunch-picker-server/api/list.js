import { success, failure } from '../libs/responseLib';
import { getUserIdentity } from '../libs/requestLib';
import { Restaurants } from '../models/Restaurants';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);

  try {
    const result = await Restaurants.findAll({
      where: {
        userId
      }
    });
    callback(null, success(result));
  } catch (error) {
    callback(null, failure(error));
  }
};
