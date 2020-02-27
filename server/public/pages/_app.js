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


  componentDidMount() {
    // TODO(@fenricage): понадобится в будущем для тем, чекни _basic.scss или overreacted блог абрамова
    // document.getElementsByTagName('body')[0].classList.add('light');
  }


  // TODO
  // https://github.com/bekliev/nextjs/blob/master/pages/_app.jsx#L22
  // https://spectrum.chat/next-js/general/one-time-rendered-layout-inside-app-js~13af80aa-c4dc-41da-8106-22a90bede0df
  // чекни это, должно помочь с единственным лайаутом, чтобы не было лишних ререндеров и дерганий
  // https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/ - ТОЧНО ПОМОЖЕТ
  static async getInitialProps({ Component, ctx }) {
    // ГОВНОКОД!
    // для сервера
    initializeApi();
    // console.log('apitest.is(HUI)', apitest.is('HUI'))
    // console.log(' FIRST _APP routing again initial call WTF?!?!?');
    // apitest.set('HUI', 'HUI');

    // const browsernoe = apitest.get(API_BROWSER)
    // здесь мы ждем выполнения getInitialProps страницы
    const pageProps = Component.getInitialProps ?
      await Component.getInitialProps(ctx) :
      {};
    // console.log('THIRD _APP AFTER ALL COMPONENT INITIAL PROP');
    // console.log("ONLY SERVER?") нет, при маршритизации вызывается на клиенте
    return { pageProps };
  }

  render() {
    const {
      Component, pageProps, store, router,
    } = this.props;
    // console.log('\x1b[36m', 'router', router, '\x1b[0m');
    // console.log('Component.getLayout', Component.getLayout);

    const getLayout = Component.getLayout || (page => page);

    //
    // if(router.pathname.startsWith('/articles')) {
    //   return (
    //     <Provider store={store}>
    //       <p>ARTCIELS</p>
    //     </Provider>
    //   );
    // }

    return (
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    );
  }

}

export default withRedux(configureStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state),
})(MyApp);
