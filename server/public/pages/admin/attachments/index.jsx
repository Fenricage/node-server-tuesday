import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';
import { Router as NextRouter } from '../../../routes';
import AdminLayout from '../../../shared/layouts/AdminLayout/AdminLayout';
import AllArticlesAdminPage from '../../../components/admin/AllArticlesAdminPage/AllArticlesAdminPage';
import auth from '../../../helpers/auth';
import { getCurrentUser, getCurrentUserServer } from '../../../actions/auth';
import withAuthSync from '../../../hoc/withAuthSync';

class ArticlesAdminPageWithLayout extends Component {

  render() {
    const { pathname } = this.props;
    return (
      <AdminLayout>
        attachmnets
      </AdminLayout>
    );
  }

}

// сделай HOC c getInitialProps, и задебажь, должна быть рпавильная последовательность логов, первый лог тут, второй в HOC
// затести также ожидание, сделай тут setTimeout
ArticlesAdminPageWithLayout.getInitialProps = async ({ query, pathname, ...context }) => {

  // const Token = await auth(context);

  return { query, pathname };
};

export default withAuthSync(ArticlesAdminPageWithLayout);
