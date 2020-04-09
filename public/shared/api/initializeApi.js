import api from './index';
import browserApi from './browserApi';
import serverApi from './serverApi';
import serverApiClass from './serverApiClass';
import browserApiClass from './browserApiClass';
import { API_BROWSER, API_SERVER, API_SERVER_CLASS } from '../constants/api';

export const initializeApi = () => {
  api.set(API_BROWSER, browserApiClass);
  api.set(API_SERVER, serverApiClass);
};
