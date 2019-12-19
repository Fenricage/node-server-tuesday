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

  // сюда контекст прокинуть
  get(name) {
    if (!this.is(name)) {
      throw new Error(`Api ${name.toUpperCase()} is not found`);
    }
    // дописать здесь get с методом который возвращает endpoints
    // а если есть context, то вызвать другой метод, который прокинет контекст в endpoints
    return this.store[name];
  }

}

const api = new Api();


export default api;
