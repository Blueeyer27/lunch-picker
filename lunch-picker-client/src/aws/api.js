import { API } from 'aws-amplify';

export const restaurantService = {
  get: id => {
    return API.get('restaurants', `/restaurants/${id}`);
  },
  getAll: () => {
    return API.get('restaurants', '/restaurants');
  },
  create: restaurant => {
    return API.post('restaurants', '/restaurants', { body: restaurant });
  },
  update: restaurant => {
    return API.put('restaurants', `/restaurants/${restaurant.restaurantId}`, {
      body: restaurant
    });
  },
  delete: id => {
    return API.del('restaurants', `/restaurants/${id}`);
  },
  detect: fileKey => {
    return API.get(
      'restaurants',
      `/restaurants/detect?fileKey=${encodeURIComponent(fileKey)}`
    );
  },
  detail: id => {
    return API.get('restaurants', `restaurants/external/${id}`);
  },
  reviews: id => {
    return API.get('restaurants', `restaurants/external/${id}/reviews`);
  }
};
