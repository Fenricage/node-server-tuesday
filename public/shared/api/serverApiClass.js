import axios from 'axios';
import { NODE_ENV, SERVER_URL } from '../utils/config';

class ServerApiClass {

  constructor(endpointsObject, context) {
    this.headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    };
    this.endpoints = endpointsObject;
    this.context = context;
  }

  r = (url, extra = {}) => {

    // проверка на прод или дев, корректирует запросы
    if (NODE_ENV !== 'development') {
      axios.defaults.baseURL = extra && extra.baseUrl ? extra.baseUrl : `${SERVER_URL}/api`;
    } else {
      // здесь нужно сделать проверку на сервер: чтобы подставить порт на которм он находится
      // иначе будет ECONNREFUSED
      axios.defaults.baseURL = extra && extra.baseUrl ? `${extra.baseUrl}/api` : `${SERVER_URL}/api`;
    }

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

export default ServerApiClass;
