import { API_BROWSER, API_SERVER, API_SERVER_CLASS } from '../constants/api';
import endpoints from './endpoints';

class Api {

  constructor(props) {
    this.store = {};
  }

  is(name) {
    return name in this.store;
  }

  set(name, value) {
    // сетим класс, не создавая экземпляра
    this.store[name] = value;
    // TODO почему дважды сетится? чекни рендер и подумай стоит ли ставить защиту от пересета
  }

  // сюда контекст прокинуть
  get(name, context) {
    if (!this.is(name)) {
      throw new Error(`Api ${name.toUpperCase()} is not found`);
    }

    // дописать здесь get с методом который возвращает endpoints
    // а если есть context, то вызвать другой метод, который прокинет контекст в endpoints
    // создаем экземплям запрошенного апи и отдаем
    // вызваем метод в зависимости от пришедших аргументов, исходя из контекста
    const InstanceApi = this.store[name];
    if (context) {
      return new InstanceApi(endpoints, context).getApi();
    }
    return new InstanceApi(endpoints).getApi();


  }

}

const api = new Api();


export default api;
