import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { fromJS } from 'immutable';
import { configureStore } from '../store/configureStore';
import { initializeApi } from '../shared/api/initializeApi';
import '../shared/css/app.scss';


class MyApp extends App {
  constructor(props) {
    super(props);
    // TODO(@fenricage): review this solution
    // initializing api for client
    initializeApi();
  }

  componentDidMount() {
    // TODO(@fenricage): need for future themes solutuions
    // document.getElementsByTagName('body')[0].classList.add('light');
  }

  // multiple layouts examples
  // https://github.com/bekliev/nextjs/blob/master/pages/_app.jsx#L22
  // https://spectrum.chat/next-js/general/one-time-rendered-layout-inside-app-js~13af80aa-c4dc-41da-8106-22a90bede0df
  // https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
  static async getInitialProps({ Component, ctx }) {
    // TODO(@fenricage): review this solution
    // initializing api for server
    initializeApi();

    // here we waiting getInitialsProps before
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const {
      Component, pageProps, store, router,
    } = this.props;

    const getLayout = Component.getLayout || (page => page);

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
