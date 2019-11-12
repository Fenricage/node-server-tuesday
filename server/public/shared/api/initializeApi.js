import api from './index';
import browserApi from './browserApi';
import serverApi from './serverApi'
import { API_BROWSER, API_SERVER } from '../constants/api';

export const initializeApi = () => {
  api.set(API_BROWSER, browserApi);
  api.set(API_SERVER, serverApi);
};
