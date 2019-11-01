import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { fromJS } from 'immutable';
import { configureStore } from '../store/configureStore';
import '../shared/css/app.scss';

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ?
      await Component.getInitialProps(ctx) :
      {};

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
