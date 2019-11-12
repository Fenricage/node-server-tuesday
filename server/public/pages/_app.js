import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { fromJS } from 'immutable';
import { configureStore } from '../store/configureStore';

import { initializeApi } from '../shared/api/initializeApi';
import { API_SERVER, API_BROWSER } from '../shared/constants/api';

import '../shared/css/app.scss';

// вызывается только на сервере при первом посещениии и на клиенте при маршриутизации
// TODO надо засетить апи для сервера, и при этом не сетить каждый раз при маршриутизации
// в конструктор? просто выше? проверять на is? (дорого)
// TODO правильно ли инитить здесь?
// инициализируем API


class MyApp extends App {

  constructor(props) {
    super(props);
    // ГОВНОКОД!
    // для клиента
    // на сервере тожэе выполнится, но почему то после всех getInitials
    initializeApi();
  }



  static async getInitialProps({ Component, ctx }) {
    // ГОВНОКОД!
    // для сервера
    initializeApi();
    // console.log('apitest.is(HUI)', apitest.is('HUI'))
    console.log(' FIRST _APP routing again initial call WTF?!?!?');
    // apitest.set('HUI', 'HUI');

    // const browsernoe = apitest.get(API_BROWSER)
    // здесь мы ждем выполнения getInitialProps страницы
    const pageProps = Component.getInitialProps ?
      await Component.getInitialProps(ctx) :
      {};
    console.log('THIRD _APP AFTER ALL COMPONENT INITIAL PROP');
    // console.log("ONLY SERVER?") нет, при маршритизации вызывается на клиенте
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

}

export default withRedux(configureStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state),
})(MyApp);
