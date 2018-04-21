import { success, failure } from '../../libs/responseLib';
import { getUserIdentity } from '../../libs/requestLib';
import { get } from '../../libs/yelpLib';

export const handler = async (event, context, callback) => {
  const userId = getUserIdentity(event);
  const { id } = event.pathParameters;

  try {
    const result = await get(id);
    callback(null, success(result));
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
