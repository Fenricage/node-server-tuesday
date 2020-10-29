import axios from 'axios';
import nextCookie from 'next-cookies';
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

  r = (url, extra = {}, context) => {
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

    extra.headers = extra.headers ? extra.headers : {};

    // const {Token} = nextCookie(context)
    // console.log('\x1b[36m', '---------------------------Token' , Token, '\x1b[0m');


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
          // console.log('\x1b[36m', 'response', response, '\x1b[0m');
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
          // if (!err.response) {
          //   reject(err);
          // } else {
          //
          //   // если статус относится к неавторизованным то удаляем токен и делаем релирект на логин
          //   // if (401 === err.response.status || 403 === err.response.status) {
          //     // Cookies.remove('Token');
          //     // console.log('\x1b[36m', 'Cookies.get(Token)' , Cookies.get('Token'), '\x1b[0m');
          //     // NextRouter.push('/auth/login');
          //     // err.response.writeHead(302, { Location: '/auth/login' });
          //     // err.response.end();
          //     // this.context.res
          //     //   .writeHead(302, {
          //     //     Location: '/auth/login',
          //     //     'Set-Cookie': 'Token=deleted; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
          //     //   })
          //     //   .end();
          //     // return;
          //     // console.log('\x1b[36m', '401, 403' , 401, 403, '\x1b[0m');
          //   // }
          //
          // }
        });
    });
  };


  getApi() {
    return this.endpoints(this.r);
  }

}

export default ServerApiClass;
