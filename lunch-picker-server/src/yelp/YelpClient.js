import qs from 'qs';
import request from 'request-promise';
import { YELP_CONFIG } from '../config';

export default class YelpClient {
  constructor(apiKey) {
    this.options = {
      headers: { Authorization: `Bearer ${apiKey}` },
      json: true
    };
  }

  async search(term, latitude, longitude) {
    const query = { term, latitude, longitude, category: 'food, All' };
    const url = `${YELP_CONFIG.baseUrl}/search?${qs.stringify(query)}`;

    const response = await request({ ...this.options, url });
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
  }

  async getDetail(id) {
    const url = `${YELP_CONFIG.baseUrl}/${id}`;
    const response = await request({ ...this.options, url });
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
  }

  async getReviews(id) {
    const url = `${YELP_CONFIG.baseUrl}/${id}/reviews`;
    const response = await request({ ...this.options, url });
    return response.reviews.map(review => {
      return {
        id: review.id,
        text: review.text,
        rating: review.rating,
        createdAt: review.time_created
      };
    });
  }
}
