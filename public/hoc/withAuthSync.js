import React, { Component } from 'react';
import auth from '../helpers/auth';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const withAuthSync = WrappedComponent => class extends Component {

    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps(ctx) {
      const token = await auth(ctx);

      // awaiting execute getInitialProps of inner component
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }

};

export default withAuthSync;
