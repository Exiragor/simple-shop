import { request } from '../request'

const productUrl = '/products';

export const getProducts = async () => {
  return await request.get(productUrl, { page: 1, count: 20 })
};
