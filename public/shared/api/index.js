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

  get(name, context) {
    if (!this.is(name)) {
      throw new Error(`Api ${name.toUpperCase()} is not found`);
    }

    const InstanceApi = this.store[name];
    if (context) {
      return new InstanceApi(endpoints, context).getApi();
    }
    return new InstanceApi(endpoints).getApi();


  }

}

const api = new Api();


export default api;
