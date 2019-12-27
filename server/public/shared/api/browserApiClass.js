import axios from 'axios';
import { Router as NextRouter } from '../../routes';
import Cookies from 'js-cookie';
import { CLIENT_URL, NODE_ENV, SERVER_URL } from '../utils/config';
import endpoints from './endpoints';

class BrowserApiClass {

  constructor(endpointsObject, context) {
    this.headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    };
    this.endpoints = endpointsObject;
    this.context = context;
  }

  r = (url, extra = {}, context) => {
    // проверка на прод или дев, корректирует запросы
    // Если НЕ РАВНО
    if (NODE_ENV !== 'development') {
      axios.defaults.baseURL = extra && extra.baseUrl ? extra.baseUrl : `${CLIENT_URL}/api`;
    } else {
      // здесь нужно сделать проверку на сервер: чтобы подставить порт на которм он находится
      // иначе будет ECONNREFUSED

      // console.log('\x1b[36m', 'extra', extra, '\x1b[0m');
      // console.log('\x1b[36m', 'axios.defaults', axios.defaults, '\x1b[0m');
      axios.defaults.baseURL = extra && extra.baseUrl ? `${extra.baseUrl}/api` : `${CLIENT_URL}/api`;
      // axios.defaults.baseURL = extra && extra.baseUrl ? extra.baseUrl : `${SERVER_URL}/api`;
    }

    Cookies.get('Token') ?
      this.headers['x-access-token'] = `${Cookies.get('Token')}` :
      this.headers['x-access-token'] = null;

    // TODO(@fenricage): переименуй или напиши иначе, выглядит как говно
    // TODO(@fenricage) сделсть то же самое в serverApi
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
          // если поменять на {
          // ...response.data и добавить статус то прилется править везде запросы
          // }
          resolve(response.data);
        })
        .catch((err) => {
          if (!err.response) {
            reject(err);
          } else {
            if (401 === err.response.status || 403 === err.response.status) {

              localStorage.removeItem('token');
              Cookies.remove('Token');
              NextRouter.pushRoute('/auth/login');

            }
            reject(err);
          }
        });
    });
  };


  getApi() {
    return this.endpoints(this.r);
  }

}

export default BrowserApiClass;
