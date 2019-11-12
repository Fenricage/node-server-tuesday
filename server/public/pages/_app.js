import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { fromJS } from 'immutable';
import { configureStore } from '../store/configureStore';
import { apitest } from '../shared/api';
import '../shared/css/app.scss';


class MyApp extends App {

  // вызывается только на сервере при первом посещениии и на клиенте при маршриутизации
  // TODO надо засетить апи для сервера, и при этом не сетить каждый раз при маршриутизации
  // в конструктор? просто выше? проверять на is? (дорого)
  static async getInitialProps({ Component, ctx }) {
    console.log(" FIRST _APP routing again initial call WTF?!?!?")
    apitest.set('HUI', 'HUI');
    const pageProps = Component.getInitialProps ?
      await Component.getInitialProps(ctx) :
      {};
    console.log("THIRD _APP AFTER ALL COMPONENT INITIAL PROP")
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
