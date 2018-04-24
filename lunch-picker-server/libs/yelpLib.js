import request from 'request-promise';
import qs from 'qs';
import { YELP_CONFIG } from '../config';
import { getParam } from './ssmLib';

const baseOptions = async () => {
  const yelpApiKey = await getParam('YELP_API_KEY');
  return { headers: { Authorization: `Bearer ${yelpApiKey}` }, json: true };
};

export const search = async (term, latitude, longitude) => {
  const query = { term, latitude, longitude, category: 'food, All' };
  const options = await baseOptions();
  const url = `${YELP_CONFIG.baseUrl}/search?${qs.stringify(query)}`;
  const response = await request({ ...options, url });
  return response.businesses.map(business => {
    return {
      id: business.id,
      name: business.name,
      categories: business.categories.map(c => c.title),
      rating: business.rating,
      coordinates: business.coordinates,
      price: business.price,
      address: business.location.display_address.join(', ')
    };
  });
};

export const get = async id => {
  const url = `${YELP_CONFIG.baseUrl}/${id}`;
  const options = await baseOptions();

  const response = await request({ ...options, url });
  return {
    id: response.id,
    name: response.name,
    categories: response.categories.map(c => c.title),
    rating: response.rating,
    coordinates: response.coordinates,
    price: response.price,
    address: response.location.display_address.join(', '),
    photos: response.photos,
    isOpen: response.hours[0].is_open_now
  };
};

export const reviews = async id => {
  const url = `${YELP_CONFIG.baseUrl}/${id}/reviews`;
  const options = await baseOptions();

  const { reviews } = await request({ ...options, url });

  return reviews.map(review => {
    return {
      rating: review.rating,
      createdAt: review.createdAt,
      text: review.text,
      user: review.user.name
    };
  });
};
