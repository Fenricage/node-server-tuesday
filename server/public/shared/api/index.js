import browserApi from './browserApi';
import { API_BROWSER, API_SERVER } from '../constants/api';

class Api {

  constructor(props) {
    this.store = {};
  }

  is(name) {
    return name in this.store;
  }

  set(name, value) {
    this.store[name] = value;
  }

  get(name) {
    if (!this.is(name)) {
      throw new Error(`Api ${name.toUpperCase()} is not found`);
    }
    return this.store[name];
  }

}

export const apitest = new Api();


export default browserApi;
