import axios from 'axios';
import { SERVER_URL, NODE_ENV, CLIENT_URL } from '../utils/config';
import endpoints from './endpoints';
// TODO заменить history
// import { history } from '../../index';

const BrowserApi = function (address) {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };

  const r = (url, extra = {}) => {
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


    localStorage.getItem('token')
      ? headers['x-access-token'] = `${localStorage.getItem('token')}`
      : headers['x-access-token'] = null;

    // TODO(@fenricage): переименуй или напиши иначе, выглядит как говно
    // TODO(@fenricage) сделсть то же самое в serverApi
    extra.headers = extra.headers ? extra.headers : {};

    return new Promise((resolve, reject) => {
      axios({
        url,
        // headers,
        ...extra,
        headers: {
          ...headers,
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
            if (401 === err.response.status) {
              localStorage.removeItem('token');
              // history.push('/login');
            } else if (403 === err.response.status) {
              // history.push('/access-denied');
            }
            reject(err);
          }
        });
    });
  };

  return endpoints(r);
};


const api = new BrowserApi();
export default api;
