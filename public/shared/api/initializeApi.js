import api from './index';
import serverApiClass from './serverApiClass';
import browserApiClass from './browserApiClass';
import { API_BROWSER, API_SERVER } from '../constants/api';

export const initializeApi = () => {
  api.set(API_BROWSER, browserApiClass);
  api.set(API_SERVER, serverApiClass);
};
