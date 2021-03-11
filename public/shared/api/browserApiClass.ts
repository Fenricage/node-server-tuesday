import axios from 'axios';
import Cookies from 'js-cookie';
import { CLIENT_URL, NODE_ENV } from '../utils/config';
import { ApiHeaders } from './types';


class BrowserApiClass {

  headers: ApiHeaders;

  constructor(endpointsObject, context) {
    this.headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    };
    this.endpoints = endpointsObject;
    this.context = context;
  }

  r = (url: string, extra = {}) : Promise<unknown> => {

    // проверка на прод или дев, корректирует запросы
    if (NODE_ENV !== 'development') {
      axios.defaults.baseURL = extra && extra.baseUrl ? extra.baseUrl : `${CLIENT_URL}/api`;
    } else {
      // здесь нужно сделать проверку на сервер: чтобы подставить порт на которм он находится
      // иначе будет ECONNREFUSED

      axios.defaults.baseURL = extra && extra.baseUrl ? `${extra.baseUrl}/api` : `${CLIENT_URL}/api`;
    }

    Cookies.get('Token')
      ? this.headers['x-access-token'] = `${Cookies.get('Token')}`
      : this.headers['x-access-token'] = null;

    extra.headers = extra.headers ? extra.headers : {};

    return new Promise((resolve, reject) => {
      axios({
        url,
        // headers,
        ...extra,
        headers: {
          ...this.headers,
          ...extra.headers,
        },
        timeout: 60000,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  };


  getApi() {
    return this.endpoints(this.r);
  }

}

export default BrowserApiClass;
