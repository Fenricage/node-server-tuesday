import axios from 'axios';
import Cookies from 'js-cookie';
import nextCookie from 'next-cookies';
import { SERVER_URL, NODE_ENV } from '../utils/config';
import { Router as NextRouter } from '../../routes';
import endpoints from './endpoints';
// TODO заменить history
// import { history } from '../../index';

const ServerApi = function (address) {

  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };

  const r = (url, extra = {}, context) => {
    // проверка на прод или дев, корректирует запросы
    // Если НЕ РАВНО
    if (NODE_ENV !== 'development') {
      axios.defaults.baseURL = extra && extra.baseUrl ? extra.baseUrl : `${SERVER_URL}/api`;
    } else {
      // здесь нужно сделать проверку на сервер: чтобы подставить порт на которм он находится
      // иначе будет ECONNREFUSED
      // console.log('\x1b[36m', 'extra', extra, '\x1b[0m');
      // console.log('\x1b[36m', 'axios.defaults', axios.defaults, '\x1b[0m');

      axios.defaults.baseURL = extra && extra.baseUrl ? `${extra.baseUrl}/api` : `${SERVER_URL}/api`;
      // axios.defaults.baseURL = extra && extra.baseUrl ? extra.baseUrl : `${SERVER_URL}/api`;
    }

    // localStorage.getItem('token') ? headers['x-access-token'] = `${localStorage.getItem('token')}` : headers['x-access-token'] = null;
    extra.headers = extra.headers ? extra.headers : {};

    // const {Token} = nextCookie(context)
    // console.log('\x1b[36m', '---------------------------Token' , Token, '\x1b[0m');

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
          // console.log('\x1b[36m', 'response', response, '\x1b[0m');
          resolve(response.data);
        })
        .catch((err) => {
          if (!err.response) {
            reject(err);
          } else {

            // если статус относится к неавторизованным то удаляем токен и делаем релирект на логин
            if (401 === err.response.status || 403 === err.response.status) {
              // localStorage.removeItem('token');
              // Cookies.remove('Token');
              // console.log('\x1b[36m', 'Cookies.get(Token)' , Cookies.get('Token'), '\x1b[0m');
              // NextRouter.push('/auth/login');
              // err.response.writeHead(302, { Location: '/auth/login' });
              // err.response.end();
              console.log('\x1b[36m', 'err.response' , err.response, '\x1b[0m');
              console.log('\x1b[36m', 'context' , context, '\x1b[0m');
              context.res.writeHead(302, { Location: '/auth/login' });
              context.res.end();
              return;
              // console.log('\x1b[36m', '401, 403' , 401, 403, '\x1b[0m');
            }
            reject(err);
          }
        });
    });
  };

  return endpoints(r);
};


const api = new ServerApi();
export default api;
