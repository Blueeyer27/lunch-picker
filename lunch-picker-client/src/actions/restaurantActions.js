import { restaurantService } from '../aws/api';
import { getCurrentPosition } from '../utils';

export const detectTextInLogo = async fileKey => {
  const response = await restaurantService.detect(fileKey);
  console.log(response);
};

export const searchByName = async name => {
  const { latitude, longitude } = await getCurrentPosition();
  const response = await restaurantService.search(name, latitude, longitude);
  console.log(response);
};

export const getDetailById = async id => {
  const response = await restaurantService.detail(id);
  console.log(response);
};

export const getReviewsById = async id => {
  const response = await restaurantService.reviews(id);
  console.log(response);
};

window.actions = {
  detectTextInLogo,
  searchByName,
  getDetailById,
  getReviewsById
};
