import api from '.';
import { API_SERVER, API_BROWSER } from '../constants/api';

const getApiDependingOnContext = (context) => {
  const { req } = context;
  const isServer = !!req;
  return isServer ? api.get(API_SERVER) : api.get(API_BROWSER);
};

export default getApiDependingOnContext;
